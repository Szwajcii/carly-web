import { Component, OnInit } from '@angular/core';
import {Roles} from '../../model/roles.model';

@Component({
  selector: 'app-breaks',
  templateUrl: './breaks.component.html',
  styleUrls: ['./breaks.component.scss']
})
export class BreaksComponent implements OnInit {

  CarlyCompany = Roles.CARLY_COMPANY;

  constructor() { }

  ngOnInit(): void {
  }

}
