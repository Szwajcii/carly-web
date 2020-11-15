import {Component, OnInit} from '@angular/core';
import {Roles} from '../../model/roles.model';
import {Engine} from '../../model/engine.model';
import {EngineManagementService} from '../../resources/engine-management.service';

@Component({
  selector: 'app-engines',
  templateUrl: './engines.component.html',
  styleUrls: ['./engines.component.scss']
})
export class EnginesComponent implements OnInit {

  CarlyCompany = Roles.CARLY_COMPANY;
  CarlyAdministrator = Roles.CARLY_ADMINISTRATOR;

  engines: Engine.Model[];
  loading = true;

  public displayedColumns: Array<string> = [
    'name',
    'price'
  ];

  constructor(
    private engineManagementService: EngineManagementService
  ) {
  }

  ngOnInit(): void {
  }

  clearFilters() {
  }

}
