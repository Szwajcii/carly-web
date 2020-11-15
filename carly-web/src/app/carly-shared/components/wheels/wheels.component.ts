import {Component, OnInit} from '@angular/core';
import {Roles} from '../../model/roles.model';
import {Wheels} from '../../model/wheels.model';

@Component({
  selector: 'app-wheels',
  templateUrl: './wheels.component.html',
  styleUrls: ['./wheels.component.scss']
})
export class WheelsComponent implements OnInit {

  CarlyCompany = Roles.CARLY_COMPANY;
  CarlyAdministrator = Roles.CARLY_ADMINISTRATOR;

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

}
