import { Component, OnInit } from '@angular/core';
import {FormAction} from '../../../model/form-action.model';

@Component({
  selector: 'app-wheels-add',
  templateUrl: './wheels-add.component.html',
  styleUrls: ['./wheels-add.component.scss']
})
export class WheelsAddComponent implements OnInit {

  formAction = FormAction.CREATE;

  constructor() { }

  ngOnInit(): void {
  }

}
