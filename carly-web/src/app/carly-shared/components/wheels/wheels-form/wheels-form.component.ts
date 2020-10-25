import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {Wheels} from '../../../model/wheels.model';
import {ValueLabel} from '../../../model/value-label';
import {PartFormAction} from '../../../model/part-form-action.model';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {WheelsManagementService} from '../../../resources/wheels-management.service';
import {wheelsDetailsFormFields, wheelsPreviews} from '../wheels-form-fields';

@Component({
  selector: 'app-wheels-form',
  templateUrl: './wheels-form.component.html',
  styleUrls: ['./wheels-form.component.scss']
})
export class WheelsFormComponent implements OnInit {

  private static PREVIEW = 'preview';

  @Input() isDisabled = false;
  @Input() formAction: PartFormAction;
  @Input() wheelsModel: Wheels.Model;
  @Input() submitEvent: EventEmitter<Wheels.Model> = new EventEmitter<Wheels.Model>();
  @Input() details = false;

  wheelsPreview: Array<ValueLabel>;
  wheelsDetailsForm: FormGroup;
  wheelsDetailsFormControls = this.formGroupService.addControlToModel(wheelsDetailsFormFields)
    .map(controlModel => {
      if (controlModel.inputName === WheelsFormComponent.PREVIEW) {
        controlModel.selectOptions = wheelsPreviews;
      }
      return controlModel;
    });

  constructor(
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private wheelsManagementService: WheelsManagementService
  ) {
  }

  ngOnInit(): void {
    this.wheelsPreview = wheelsPreviews;
  }

  onSubmit($event) {
    this.wheelsDetailsForm = $event;

    const wheels: Wheels.Model = {
      ...this.wheelsDetailsForm.value
    };

    this.createOrUpdate(wheels);
  }

  createOrUpdate(wheels: Wheels.Model) {
    let partAction;

    if (this.formAction === PartFormAction.CREATE) {
      partAction = this.wheelsManagementService.create(wheels);
    } else {
      partAction = this.wheelsManagementService.update(wheels);
    }

    partAction.subscribe(data => {
      this.messageService.showMessage('Wheels created!');
      this.submitEvent.emit(wheels);
      this.router.navigate(['/parts/wheels', 'details', data.id, 'edit']);
    }, error => {
      this.messageService.showMessage('Create wheels failed!');
      console.log(error);
    });
  }

}
