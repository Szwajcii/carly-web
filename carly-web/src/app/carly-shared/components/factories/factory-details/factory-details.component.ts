import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {FactoryMatch} from '../../../model/factory-match.model';
import {TEST_DATA} from '../test-factories-data';
import {MatchStatus} from '../../../model/match-status.enum';
import {MatDialog} from '@angular/material/dialog';
import {FactoryMatchDialogComponent} from '../factory-match-request-dialog/factory-match-dialog.component';
import {FactoryManagementService} from '../../../resources/factory-management.service';
import {MessageService} from '../../../services/message.service';
import {CompanyMatchingRequest} from '../../../model/company-matching-request.model';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-factory-details',
  templateUrl: './factory-details.component.html',
  styleUrls: ['./factory-details.component.scss']
})
export class FactoryDetailsComponent implements OnInit {

  Matched = MatchStatus.MATCHED;
  Pending = MatchStatus.PENDING_APPROVAL;
  NotMatched = MatchStatus.NOT_MATCHED;

  factories: FactoryMatch[];
  factory: FactoryMatch;
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
    this.factories = TEST_DATA;
    let factoryId;
    this.findFactoryId().subscribe(data => {
      factoryId = data;
    });

    this.factory = this.factories.find(factory => factory.company.id === factoryId);
    this.isMatched = this.factory.matchStatus === MatchStatus.MATCHED;

    console.log(this.factory);

    this.authService.getUserContext().subscribe(resData => {
      if (resData != null) {
        this.companyId = resData.id;
      }
    }, error => {
      this.messageService.showMessage('Unexpected error occurred!');
      console.log(error);
    });
  }

  findFactoryId() {
    return this.activatedRoute.params.pipe(map(params => params.id));
  }

  openRequestDialog(cancel = false) {
    const dialogRef = this.dialog.open(FactoryMatchDialogComponent, {
      data: {
        companyName: this.factory.company.companyName,
        companyId: this.factory.company.id,
        cancelContract: cancel
      }
    });

    dialogRef.afterClosed().subscribe(id => {
      const matchRequest: CompanyMatchingRequest = {
        factoryId: this.factory.company.id,
        companyId: this.companyId,
        isCancelRequest: cancel,
        message: ''
      };
      this.requestOrCancelMatching(matchRequest);
    }, error => {
      this.messageService.showMessage('Unexpected error occurred!');
      console.log(error);
    });
  }

  requestOrCancelMatching(request: CompanyMatchingRequest) {
    let requestAction;

    if (request.isCancelRequest) {
      requestAction = this.factoryManagementService.cancelMatching(request);
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
