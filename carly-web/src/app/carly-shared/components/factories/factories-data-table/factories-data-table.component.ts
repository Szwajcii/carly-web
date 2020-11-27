import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from "@angular/material/dialog";
import {Company} from "../../../model/company.model";
import {FactoryMatchRequestDialogComponent} from "../factory-match-request-dialog/factory-match-request-dialog.component";

@Component({
  selector: 'app-factories-data-table',
  templateUrl: './factories-data-table.component.html',
  styleUrls: ['./factories-data-table.component.scss']
})
export class FactoriesDataTableComponent implements OnInit, AfterViewInit {

  public filter: string;
  public datasource = new MatTableDataSource([]);
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Input() set data(data: any[]) {
    this.setDatasource(data);
  }

  public displayedColumns: Array<string> = [
    'name',
    'status',
    'action'
  ];

  constructor(
    private dialog: MatDialog
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


  openRequestMatchingDialog(factory: Company.Model) {
    console.log(factory);
    const dialogRef = this.dialog.open(FactoryMatchRequestDialogComponent, {
      data: {
        companyName: factory.companyName,
        companyId: factory.id
      }
    });

    // todo: Emmit event to make matching request
    // dialogRef.afterClosed().subscribe(id => {
    //   this.factoryManagementService.requestMatching(id);
    // }, error => {
    //   this.messageService.showMessage('Unexpected error occurred!');
    //   console.log(error);
    // });

  }
}
