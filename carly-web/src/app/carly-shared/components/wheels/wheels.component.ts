import {Component, OnInit, ViewChild} from '@angular/core';
import {Roles} from '../../model/roles.model';
import {Wheels} from '../../model/wheels.model';
import {DataTableComponent} from '../data-table/data-table.component';

@Component({
  selector: 'app-wheels',
  templateUrl: './wheels.component.html',
  styleUrls: ['./wheels.component.scss']
})
export class WheelsComponent implements OnInit {

  CarlyFactory = Roles.CARLY_FACTORY;
  CarlyAdministrator = Roles.ADMINISTRATOR;

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;
  wheels: Wheels.Model[];
  loading = true;

  public displayedColumns: Array<string> = [
    'name',
    'price'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  clearFilters() {
    this.dataTable.clearFilter();
  }

}
