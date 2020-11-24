import { Component, OnInit } from '@angular/core';
import {FormAction} from '../../../model/form-action.model';

@Component({
  selector: 'app-equipment-add',
  templateUrl: './equipment-add.component.html',
  styleUrls: ['./equipment-add.component.scss']
})
export class EquipmentAddComponent implements OnInit {

  formAction = FormAction.CREATE;

  constructor() { }

  ngOnInit(): void {
  }

}
