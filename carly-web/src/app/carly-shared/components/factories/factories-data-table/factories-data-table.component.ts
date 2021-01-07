import {AfterViewInit, Component, Input, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {Company} from '../../../model/company.model';
import {FactoryMatchDialogComponent} from '../factory-match-request-dialog/factory-match-dialog.component';
import {MatchStatus} from '../../../model/match-status.enum';
import {MessageService} from '../../../services/message.service';
import {FactoryManagementService} from '../../../resources/factory-management.service';
import {CompanyMatchResponse} from '../../../model/company-match-response.model';

@Component({
  selector: 'app-factories-data-table',
  templateUrl: './factories-data-table.component.html',
  styleUrls: ['./factories-data-table.component.scss']
})
export class FactoriesDataTableComponent implements OnInit, AfterViewInit {

  Matched = MatchStatus.MATCHED;

  public filter: string;
  public datasource = new MatTableDataSource([]);
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Input() contextCompanyId: string;
  matchedFactories: CompanyMatchResponse[] = [];
  loading = true;
  noRecords = false;

  @Input() set data(data: any[]) {
    this.setDatasource(data);
  }

  public displayedColumns: Array<string> = [
    'name',
    // 'status',
    'action'
  ];

  constructor(
    private dialog: MatDialog,
    private messageService: MessageService,
    private factoryManagementService: FactoryManagementService
  ) {
  }

  ngOnInit(): void {
    this.factoryManagementService.findAllMatchedFactories(this.contextCompanyId)
      .subscribe(resData => {
        this.matchedFactories = resData.companyFactoriesResponse;
        console.log(this.matchedFactories);
        this.setDatasource(this.matchedFactories);
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


  openMatchDialog(companyMatchRequest: CompanyMatchResponse) {
    const dialogRef = this.dialog.open(FactoryMatchDialogComponent, {
      data: {
        companyName: companyMatchRequest.factoryName,
        companyId: companyMatchRequest.factoryId,
        cancelContract: true,
        factoryMatchId: companyMatchRequest.matchId
      }
    });

    dialogRef.afterClosed().subscribe(id => {
      // This won't emit event when we just close modal
      if (id !== null && id !== undefined) {
        this.cancelMatching(id);
      }
    }, error => {
      this.messageService.showMessage('Unexpected error occurred!');
      console.log(error);
    });

  }

  cancelMatching(matchId: string) {
    this.factoryManagementService.cancelMatching(matchId)
      .subscribe(resData => {
        console.log(resData);
      }, error => {
        console.log(error);
      });
  }

}
