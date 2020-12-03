import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-order-data-table',
  templateUrl: './order-data-table.component.html',
  styleUrls: ['./order-data-table.component.scss']
})
export class OrderDataTableComponent implements OnInit, AfterViewInit {

  public datasource = new MatTableDataSource([]);
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Input() set data(data: any[]) {
    this.setDatasource(data);
  }

  public displayedColumns: Array<string> = [
    'id',
    'status',
    'price',
    'action'
  ];

  constructor() {
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

}
