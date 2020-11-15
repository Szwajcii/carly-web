import {Component, OnInit} from '@angular/core';
import {FormAction} from '../../../model/form-action.model';

@Component({
  selector: 'app-engine-add',
  templateUrl: './engine-add.component.html',
  styleUrls: ['./engine-add.component.scss']
})
export class EngineAddComponent implements OnInit {

  formAction = FormAction.CREATE;

  constructor() {
  }

  ngOnInit(): void {
  }

}
