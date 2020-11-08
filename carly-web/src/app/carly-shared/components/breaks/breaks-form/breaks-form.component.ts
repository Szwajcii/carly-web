import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

import {Breaks} from '../../../model/breaks.model';
import {ValueLabel} from '../../../model/value-label';
import {FormAction} from '../../../model/form-action.model';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {BreaksManagementService} from '../../../resources/breaks-management.service';
import {breaksDetailsFormFields, breaksPreviews} from '../breaks-form-fields';

@Component({
  selector: 'app-breaks-form',
  templateUrl: './breaks-form.component.html',
  styleUrls: ['./breaks-form.component.scss']
})
export class BreaksFormComponent implements OnInit {

  private static PREVIEW = 'preview';

  @Input() isDisabled = false;
  @Input() formAction: FormAction;
  @Input() breaksModel: Breaks.Model;
  @Input() submitEvent: EventEmitter<Breaks.Model> = new EventEmitter<Breaks.Model>();
  @Input() details = false;

  breaksPreviews: Array<ValueLabel>;
  breaksDetailsForm: FormGroup;
  breaksDetailsFormControls = this.formGroupService.addControlToModel(breaksDetailsFormFields)
    .map(controlModel => {
      if (controlModel.inputName === BreaksFormComponent.PREVIEW) {
        controlModel.selectOptions = breaksPreviews;
      }
      return controlModel;
    });


  constructor(
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private breaksManagementService: BreaksManagementService
  ) {
  }

  ngOnInit(): void {
    this.breaksPreviews = breaksPreviews;
  }

  onSubmit($event) {
    this.breaksDetailsForm = $event;

    const breaks: Breaks.Model = {
      ...this.breaksDetailsForm.value
    };

    this.createOrUpdate(breaks);

  }

  createOrUpdate(breaks: Breaks.Model) {
    let partAction;

    if (this.formAction === FormAction.CREATE) {
      partAction = this.breaksManagementService.create(breaks);
    } else {
      partAction = this.breaksManagementService.update(breaks);
    }

    partAction.subscribe(data => {
      this.messageService.showMessage('Breaks created!');
      this.submitEvent.emit(breaks);
      this.router.navigate(['/parts/breaks', 'details', data.id, 'edit']);
    }, error => {
      this.messageService.showMessage('Create breaks failed!');
      console.log(error);
    });
  }


}
