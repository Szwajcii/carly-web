import { Component, OnInit } from '@angular/core';
import {FormAction} from '../../../model/form-action.model';

@Component({
  selector: 'app-brakes-add',
  templateUrl: './brakes-add.component.html',
  styleUrls: ['./brakes-add.component.scss']
})
export class BrakesAddComponent implements OnInit {

  formAction = FormAction.CREATE;

  constructor() { }

  ngOnInit(): void {
  }

}
