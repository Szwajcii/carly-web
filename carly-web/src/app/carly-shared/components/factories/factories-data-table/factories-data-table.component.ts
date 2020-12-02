import {AfterViewInit, Component, Input, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {Company} from '../../../model/company.model';
import {FactoryMatchDialogComponent} from '../factory-match-request-dialog/factory-match-dialog.component';
import {MatchStatus} from '../../../model/match-status.enum';
import {MessageService} from '../../../services/message.service';
import {CompanyMatchingRequest} from '../../../model/company-matching-request.model';

@Component({
  selector: 'app-factories-data-table',
  templateUrl: './factories-data-table.component.html',
  styleUrls: ['./factories-data-table.component.scss']
})
export class FactoriesDataTableComponent implements OnInit, AfterViewInit {

  Matched = MatchStatus.MATCHED;

  public filter: string;
  public datasource = new MatTableDataSource([]);
  public cancelMatch = true;
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Output() matchRequest = new EventEmitter();

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
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
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


  openMatchDialog(factory: Company.Model, isCancel = false) {
    const dialogRef = this.dialog.open(FactoryMatchDialogComponent, {
      data: {
        companyName: factory.companyName,
        companyId: factory.id,
        cancelContract: isCancel
      }
    });

    // todo: Emmit event to make matching request
    dialogRef.afterClosed().subscribe(id => {
      const companyMatchingRequest = new CompanyMatchingRequest();
      companyMatchingRequest.factoryId = id;
      companyMatchingRequest.isCancelRequest = isCancel;
      this.matchRequest.emit(companyMatchingRequest);
    }, error => {
      this.messageService.showMessage('Unexpected error occurred!');
      console.log(error);
    });

  }
}
