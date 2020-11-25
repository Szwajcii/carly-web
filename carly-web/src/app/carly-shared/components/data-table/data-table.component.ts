import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DeletePartDialogComponent} from '../delete-part-dialog/delete-part-dialog.component';
import {Roles} from '../../model/roles.model';
import {UserManagementService} from '../../resources/user-management.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {

  public filter: string;
  public datasource = new MatTableDataSource([]);
  @Output() deletePart = new EventEmitter();
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Input() set data(data: any[]) {
    this.setDatasource(data);
  }

  @Input() displayedColumns: Array<string>;

  constructor(
    private dialog: MatDialog,
    private userManagementService: UserManagementService
  ) {
  }

  ngOnInit(): void {
    this.userManagementService.isUserHasRole(Roles.CARLY_FACTORY).subscribe(result => {
      if (result) {
        this.displayedColumns.push('action');
      }
    }, error => {
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

  openDeleteDialog(element: any) {
    const dialogRef = this.dialog.open(DeletePartDialogComponent, {
      data: {
        partName: element.name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletePart.emit(element.id);
      }
    });
  }

}
