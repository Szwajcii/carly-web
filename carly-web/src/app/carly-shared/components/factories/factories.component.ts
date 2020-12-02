import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../services/message.service';
import {FactoryMatch} from '../../model/factory-match.model';
import {FactoryManagementService} from '../../resources/factory-management.service';
import {TEST_DATA} from './test-factories-data';
import {AuthService} from '../auth/auth.service';
import {CompanyMatchingRequest} from '../../model/company-matching-request.model';

@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})
export class FactoriesComponent implements OnInit {


  public datasource = new MatTableDataSource([]);
  contextCompanyId: string;
  factories: FactoryMatch[];
  loading = true;
  noRecords = false;

  public displayedColumns: Array<string> = [
    'name',
    'status',
    'action'
  ];

  constructor(
    private messageService: MessageService,
    private factoryManagementService: FactoryManagementService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    // fixme: Uncomment this when backend will be ready
    // this.factoryManagementService.findFactoryMatching()
    //   .subscribe(resData => {
    //     this.factories = resData;
    //     this.loading = false;
    //     this.noRecords = this.factories.length === 0;
    //   }, error => {
    //     this.messageService.showMessage('Connection problem', 3000);
    //     console.log(error);
    //   });
    this.factories = TEST_DATA;
    this.loading = false;
    this.noRecords = this.factories.length === 0;
    this.datasource = new MatTableDataSource<any>(this.factories);

    this.authService.getUserContext().subscribe(resData => {
      if (resData != null) {
        this.contextCompanyId = resData.id;
      }
    }, error => {
      this.messageService.showMessage('Unexpected error occurred!');
      console.log(error);
    });

  }

  matchRequest($event: CompanyMatchingRequest) {
    let requestAction;
    const companyMatchingRequest = new CompanyMatchingRequest();
    companyMatchingRequest.factoryId = $event.factoryId;
    companyMatchingRequest.isCancelRequest = $event.isCancelRequest;
    companyMatchingRequest.companyId = this.contextCompanyId;
    companyMatchingRequest.message = '';

    if ($event.isCancelRequest) {
      requestAction = this.factoryManagementService.cancelMatching(companyMatchingRequest);
    } else {
      requestAction = this.factoryManagementService.requestMatching(companyMatchingRequest);
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
