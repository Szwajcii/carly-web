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

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private messageService: MessageService,
    private factoryManagementService: FactoryManagementService
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
      if (cancel) {
        this.factoryManagementService.cancelMatching(id);
      } else {
        this.factoryManagementService.requestMatching(id);
      }
    }, error => {
        this.messageService.showMessage('Unexpected error occurred!');
        console.log(error);
    });

  }


}
