import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

import {Brake} from '../../../model/brakes.model';
import {ValueLabel} from '../../../model/value-label';
import {FormAction} from '../../../model/form-action.model';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {BrakesManagementService} from '../../../resources/brakes-management.service';
import {brakesDetailsFormFields, brakesPreviews} from '../brakes-form-fields';
import {Brand} from '../../../model/brand.model';

@Component({
  selector: 'app-brakes-form',
  templateUrl: './brakes-form.component.html',
  styleUrls: ['./brakes-form.component.scss']
})
export class BrakesFormComponent implements OnInit {

  private static PREVIEW = 'preview';

  @Input() isDisabled = false;
  @Input() formAction: FormAction;
  @Input() brakesModel: Brake.Model;
  @Input() submitEvent: EventEmitter<Brake.Model> = new EventEmitter<Brake.Model>();
  @Input() details = false;

  brakesPreviews: Array<ValueLabel>;
  brakesDetailsForm: FormGroup;
  brakesDetailsFormControls = this.formGroupService.addControlToModel(brakesDetailsFormFields)
    .map(controlModel => {
      if (controlModel.inputName === BrakesFormComponent.PREVIEW) {
        controlModel.selectOptions = brakesPreviews;
      }
      return controlModel;
    });


  constructor(
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private brakesManagementService: BrakesManagementService
  ) {
  }

  ngOnInit(): void {
    this.brakesPreviews = brakesPreviews;
  }

  // Take event from PartForm component
  onSubmit($event) {
    this.brakesDetailsForm = $event.formValue;
    const partBrand: Brand = $event.partBrand;

    const model: Brake.Model = {
      ...this.brakesDetailsForm.value
    };
    model.brand = partBrand;

    this.createOrUpdate(model);
  }

  createOrUpdate(model: Brake.Model) {
    let partAction;

    if (this.formAction === FormAction.CREATE) {
      partAction = this.brakesManagementService.create(model);
    } else {
      model.id = this.brakesModel.id;
      partAction = this.brakesManagementService.update(model);
    }

    partAction.subscribe(data => {
      const action = this.formAction === FormAction.CREATE ? 'created!' : 'updated!';
      this.messageService.showMessage('Brakes ' + action);
      this.submitEvent.emit(model);
      this.router.navigate(['/brakes', 'details', data.id]);
    }, error => {
      this.messageService.showMessage('Create brakes failed!');
      console.log(error);
    });
  }


}
