import { Component, OnInit } from '@angular/core';
import {Roles} from '../../model/roles.model';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss']
})
export class CarModelComponent implements OnInit {

  CarlyFactory = Roles.CARLY_FACTORY;
  CarlyAdministrator = Roles.ADMINISTRATOR;

  constructor() { }

  ngOnInit(): void {
  }

}
