import {AfterViewInit, Component, Input, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {FactoryMatchDialogComponent} from '../factory-match-request-dialog/factory-match-dialog.component';
import {MatchStatus} from '../../../model/match-status.enum';
import {MessageService} from '../../../services/message.service';
import {FactoryManagementService} from '../../../resources/factory-management.service';
import {CompanyMatchResponse} from '../../../model/company-match-response.model';
import {UNEXPECTED_ERROR} from '../../../utils/error-messages';
import {CompanyMatchManagementService} from '../../../resources/company-match-management.service';
import {MatchResponse} from '../../../model/match-response.model';

@Component({
  selector: 'app-factories-data-table',
  templateUrl: './factories-data-table.component.html',
  styleUrls: ['./factories-data-table.component.scss']
})
export class FactoriesDataTableComponent implements OnInit, AfterViewInit {

  Accepted = MatchStatus.ACCEPTED;

  public filter: string;
  public datasource = new MatTableDataSource([]);
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Output() cancelMatchingEvent = new EventEmitter();
  @Input() contextCompanyId: string;
  matchedFactories: CompanyMatchResponse[] = [];

  @Input() set data(data: any[]) {
    this.setDatasource(data);
  }

  public displayedColumns: Array<string> = [
    'name',
    'status',
    'action'
  ];

  constructor(
    private dialog: MatDialog,
    private messageService: MessageService,
    private factoryManagementService: FactoryManagementService,
    private companyMatchManagementService: CompanyMatchManagementService
  ) {
  }

  ngOnInit(): void {
    this.fetchAllAcceptedPendingMatching();
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

  fetchAllAcceptedPendingMatching() {
    this.companyMatchManagementService.findAllAcceptedPendingMatching(this.contextCompanyId)
      .subscribe(resData => {
        this.matchedFactories = resData.companyFactoriesResponse;
        console.log(this.matchedFactories);
        this.setDatasource(this.matchedFactories);
      }, error => {
        this.messageService.showMessage(UNEXPECTED_ERROR);
        console.log(error);
      });
  }

  openMatchDialog(companyMatchRequest: CompanyMatchResponse) {
    console.log(companyMatchRequest);
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
        const matchResponse: MatchResponse.Model = {
          matchId: id
        };
        console.log(id);
        this.cancelMatching(matchResponse);
      }
    }, error => {
      this.messageService.showMessage(UNEXPECTED_ERROR);
      console.log(error);
    });

  }

  cancelMatching(matchResponse: MatchResponse.Model) {
    this.companyMatchManagementService.cancelMatchingWithFactory(matchResponse)
      .subscribe(resData => {
        console.log(resData);
        this.fetchAllAcceptedPendingMatching();
        this.cancelMatchingEvent.emit();
      }, error => {
        console.log(error);
      });
  }

}
