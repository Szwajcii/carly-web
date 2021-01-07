import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {MessageService} from '../../../services/message.service';
import {FactoryManagementService} from '../../../resources/factory-management.service';
import {CompanyResponse} from '../../../model/company-response.model';
import {FactoryMatchDialogComponent} from '../factory-match-request-dialog/factory-match-dialog.component';
import {CompanyMatchingRequest} from '../../../model/company-matching-request.model';

@Component({
  selector: 'app-find-factories-data-table',
  templateUrl: './find-factories-data-table.component.html',
  styleUrls: ['./find-factories-data-table.component.scss']
})
export class FindFactoriesDataTableComponent implements OnInit, AfterViewInit {

  public filter: string;
  public datasource = new MatTableDataSource([]);
  public cancelMatch = true;
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Input() contextCompanyId: string;
  factoriesToMatch: CompanyResponse[] = [];

  public displayedColumns: Array<string> = [
    'name',
    'action'
  ];

  constructor(
    private dialog: MatDialog,
    private messageService: MessageService,
    private factoryManagementService: FactoryManagementService
  ) {
  }

  ngOnInit(): void {
    this.factoryManagementService.findFactoriesToMatch(this.contextCompanyId)
      .subscribe(resData => {
        this.factoriesToMatch = resData;
        this.setDatasource(this.factoriesToMatch);
        console.log(this.factoriesToMatch);
      }, error => {
        this.messageService.showMessage('Unexpected error occurred!');
        console.log(error);
      });
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  setDatasource(data: any[]) {
    this.datasource = new MatTableDataSource<any>(data);
    this.datasource.data = data;
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  clearFilter() {
    this.datasource.filter = '';
    this.filter = '';
  }

  openMatchDialog(factoryId: string, factoryName: string) {
    const dialogRef = this.dialog.open(FactoryMatchDialogComponent, {
      data: {
        companyName: factoryName,
        companyId: factoryId
      }
    });

    dialogRef.afterClosed().subscribe(id => {
      // This won't emit event when we just close modal
      if (id !== null && id !== undefined) {
        const companyMatchingRequest = new CompanyMatchingRequest();
        companyMatchingRequest.factoryId = id;
        companyMatchingRequest.companyId = this.contextCompanyId;
        // todo: Add message
        companyMatchingRequest.message = '';
        this.sendMatchRequest(companyMatchingRequest);
      }
    }, error => {
      this.messageService.showMessage('Unexpected error occurred!');
      console.log(error);
    });
  }

  sendMatchRequest(companyMatchingRequest: CompanyMatchingRequest) {
    this.factoryManagementService.requestMatching(companyMatchingRequest)
      .subscribe(resData => {
        console.log(resData);
        this.messageService.showMessage('Match request sent successfully!');
      }, error => {
        console.log(error);
      });
  }
}
