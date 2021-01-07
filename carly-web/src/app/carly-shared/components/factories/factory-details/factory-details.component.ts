import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {FactoryMatch} from '../../../model/factory-match.model';
import {MatchStatus} from '../../../model/match-status.enum';
import {MatDialog} from '@angular/material/dialog';
import {FactoryMatchDialogComponent} from '../factory-match-request-dialog/factory-match-dialog.component';
import {FactoryManagementService} from '../../../resources/factory-management.service';
import {MessageService} from '../../../services/message.service';
import {CompanyMatchingRequest} from '../../../model/company-matching-request.model';
import {AuthService} from '../../auth/auth.service';
import {FactoryRequest} from '../../../model/factory-request.model';
import {FactoryDetailsResponse} from '../../../model/factory-details-response.model';
import {addressDetails, factoryDetails} from './factory-form-detail';

@Component({
  selector: 'app-factory-details',
  templateUrl: './factory-details.component.html',
  styleUrls: ['./factory-details.component.scss']
})
export class FactoryDetailsComponent implements OnInit {

  Matched = MatchStatus.MATCHED;
  Pending = MatchStatus.PENDING_APPROVAL;
  NotMatched = MatchStatus.NOT_MATCHED;


  addressDetails = addressDetails;
  factoryDetails = factoryDetails;
  factory: FactoryDetailsResponse;
  factoryId: string;
  cancelMatch = true;
  isMatched = false;
  companyId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private messageService: MessageService,
    private factoryManagementService: FactoryManagementService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.findFactoryId().subscribe(data => {
      this.factoryId = data;
    });

    // this.factory = this.factories.find(factory => factory.company.id === this.factoryId);
    // this.isMatched = this.factory.matchStatus === MatchStatus.MATCHED;

    this.fetchFactoryDetails();

    this.authService.getUserContext().subscribe(resData => {
      if (resData != null) {
        this.companyId = resData.id;
      }
    }, error => {
      this.messageService.showMessage('Unexpected error occurred!');
      console.log(error);
    });
  }

  fetchFactoryDetails() {
    const factoryRequest: FactoryRequest = {
      factoryId: this.factoryId,
      partType: 'BRAKES'
    };
    this.factoryManagementService.getFactoryDetails(factoryRequest)
      .subscribe(resData => {
        this.factory = resData;
        console.log(resData);
      }, error => {
        console.log(error);
      });
  }

  findFactoryId() {
    return this.activatedRoute.params.pipe(map(params => params.id));
  }

  openRequestDialog(cancel = false) {
    const dialogRef = this.dialog.open(FactoryMatchDialogComponent, {
      data: {
        companyName: this.factory.factoryName,
        companyId: this.factoryId,
        cancelContract: cancel
      }
    });

    dialogRef.afterClosed().subscribe(id => {
      const matchRequest: CompanyMatchingRequest = {
        factoryId: this.factoryId,
        companyId: this.companyId,
        isCancelRequest: cancel,
        message: ''
      };
      if (id) {
        this.requestOrCancelMatching(matchRequest);
      }
    }, error => {
      this.messageService.showMessage('Unexpected error occurred!');
      console.log(error);
    });
  }

  requestOrCancelMatching(request: CompanyMatchingRequest) {
    let requestAction;

    if (request.isCancelRequest) {
      // todo: Here we should pass matchId
      requestAction = this.factoryManagementService.cancelMatching('');
    } else {
      requestAction = this.factoryManagementService.requestMatching(request);
    }

    requestAction.subscribe(resData => {
      console.log(resData);
      this.messageService.showMessage('Match request sent successfully!');
    }, error => {
      console.log(error);
      this.messageService.showMessage('Unexpected error occurred!');
    });
  }


}
