import {Component, OnInit} from '@angular/core';
import {Roles} from '../../model/roles.model';
import {Tires} from '../../model/tires.model';
import {TiresManagementService} from '../../resources/tires-management.service';

@Component({
  selector: 'app-tires',
  templateUrl: './tires.component.html',
  styleUrls: ['./tires.component.scss']
})
export class TiresComponent implements OnInit {

  CarlyCompany = Roles.CARLY_COMPANY;
  CarlyAdministrator = Roles.CARLY_ADMINISTRATOR;

  tires: Tires.Model[];
  loading = true;

  public displayedColumns: Array<string> = [
    'name',
    'price'
  ];

  constructor(
    private tiresManagementService: TiresManagementService
  ) {
  }

  ngOnInit(): void {
  }

}
