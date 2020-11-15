import {Component, OnInit} from '@angular/core';
import {FormAction} from '../../../model/form-action.model';

@Component({
  selector: 'app-tires-add',
  templateUrl: './tires-add.component.html',
  styleUrls: ['./tires-add.component.scss']
})
export class TiresAddComponent implements OnInit {

  formAction = FormAction.CREATE;

  constructor() {
  }

  ngOnInit(): void {
  }

}
