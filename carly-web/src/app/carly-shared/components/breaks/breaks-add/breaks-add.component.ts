import { Component, OnInit } from '@angular/core';
import {FormAction} from '../../../model/form-action.model';

@Component({
  selector: 'app-breaks-add',
  templateUrl: './breaks-add.component.html',
  styleUrls: ['./breaks-add.component.scss']
})
export class BreaksAddComponent implements OnInit {

  formAction = FormAction.CREATE;

  constructor() { }

  ngOnInit(): void {
  }

}
