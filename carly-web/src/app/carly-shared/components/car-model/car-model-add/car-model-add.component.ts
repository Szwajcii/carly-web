import {Component, OnInit} from '@angular/core';
import {FormAction} from '../../../model/form-action.model';

@Component({
  selector: 'app-car-model-add',
  templateUrl: './car-model-add.component.html',
  styleUrls: ['./car-model-add.component.scss']
})
export class CarModelAddComponent implements OnInit {

  formAction = FormAction.CREATE;

  constructor() {
  }

  ngOnInit(): void {
  }

}
