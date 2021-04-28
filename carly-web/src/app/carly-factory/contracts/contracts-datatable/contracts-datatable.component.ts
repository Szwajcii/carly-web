import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatchStatus} from '../../../carly-shared/model/match-status.enum';

@Component({
  selector: 'app-contracts-datatable',
  templateUrl: './contracts-datatable.component.html',
  styleUrls: ['./contracts-datatable.component.scss']
})
export class ContractsDatatableComponent implements OnInit, AfterViewInit {

  Accepted = MatchStatus.ACCEPTED;

  public datasource = new MatTableDataSource([]);
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Output() confirmMatching = new EventEmitter<any>();
  @Output() cancelMatching = new EventEmitter<any>();
  @Input() set data(data: any[]) {
    this.setDatasource(data);
  }

  public displayedColumns: Array<string> = [
    'name',
    'status',
    'createDate',
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

  confirmMatchingWithCompany(element: any) {
    this.confirmMatching.emit(element);
  }

  cancelMatchingWithCompany(element: any) {
    this.cancelMatching.emit(element);
  }
}
