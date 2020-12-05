import {Component, OnInit} from '@angular/core';
import {Roles} from '../../model/roles.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  CarlyCompany = Roles.CARLY_COMPANY;

  constructor() {
  }

  ngOnInit(): void {
  }

}
