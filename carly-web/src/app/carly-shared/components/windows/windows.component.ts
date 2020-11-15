import { Component, OnInit } from '@angular/core';
import {Roles} from '../../model/roles.model';
import {Windows} from '../../model/windows.model';
import {WindowsManagementService} from '../../resources/windows-management.service';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss']
})
export class WindowsComponent implements OnInit {

  CarlyCompany = Roles.CARLY_COMPANY;
  CarlyAdministrator = Roles.CARLY_ADMINISTRATOR;

  windows: Windows.Model[];
  loading = true;

  public displayedColumns: Array<string> = [
    'name',
    'price'
  ];

  constructor(
    private windowsManagementService: WindowsManagementService
  ) {
  }

  ngOnInit(): void {
  }

}
