import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

import {Breaks} from '../../../model/breaks.model';
import {ValueLabel} from '../../../model/value-label';
import {PartFormAction} from '../../../model/part-form-action.model';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {BreaksManagementService} from '../../../resources/breaks-management.service';
import {breaksPreviews} from "../breaks-form-fields";

@Component({
  selector: 'app-breaks-form',
  templateUrl: './breaks-form.component.html',
  styleUrls: ['./breaks-form.component.scss']
})
export class BreaksFormComponent implements OnInit {

  @Input() isDisabled = false;
  @Input() formAction: PartFormAction;
  @Input() breaksModel: Breaks.Model;
  @Input() submitEvent: EventEmitter<Breaks.Model> = new EventEmitter<Breaks.Model>();
  @Input() details = false;

  breaksPreviews: Array<ValueLabel>;

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private breaksManagementService: BreaksManagementService
  ) {
  }

  ngOnInit(): void {

    this.breaksPreviews = breaksPreviews;

  }

  onSubmit() {

  }

  createOrUpdate(breaks: Breaks.Model) {

  }


}
