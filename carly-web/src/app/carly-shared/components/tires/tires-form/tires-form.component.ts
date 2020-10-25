import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {Tires} from '../../../model/tires.model';
import {ValueLabel} from '../../../model/value-label';
import {PartFormAction} from '../../../model/part-form-action.model';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {TiresManagementService} from '../../../resources/tires-management.service';
import {tiresDetailsFormFields, tiresPreviews} from '../tires-form-fields';

@Component({
  selector: 'app-tires-form',
  templateUrl: './tires-form.component.html',
  styleUrls: ['./tires-form.component.scss']
})
export class TiresFormComponent implements OnInit {

  private static PREVIEW = 'preview';

  @Input() isDisabled = false;
  @Input() formAction: PartFormAction;
  @Input() tiresModel: Tires.Model;
  @Input() submitEvent: EventEmitter<Tires.Model> = new EventEmitter<Tires.Model>();
  @Input() details = false;

  tiresPreviews: Array<ValueLabel>;
  tiresDetailsForm: FormGroup;
  tiresDetailsFormControls = this.formGroupService.addControlToModel(tiresDetailsFormFields)
    .map(controlModel => {
      if (controlModel.inputName === TiresFormComponent.PREVIEW) {
        controlModel.selectOptions = tiresPreviews;
      }
      return controlModel;
    });

  constructor(
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private tiresManagementService: TiresManagementService
  ) {
  }

  ngOnInit(): void {
    this.tiresPreviews = tiresPreviews;
  }

  onSubmit($event) {
    this.tiresDetailsForm = $event;

    const tires: Tires.Model = {
      ...this.tiresDetailsForm.value
    };

    this.createOrUpdate(tires);
  }

  createOrUpdate(tires: Tires.Model) {
    let partAction;

    if (this.formAction === PartFormAction.CREATE) {
      partAction = this.tiresManagementService.create(tires);
    } else {
      partAction = this.tiresManagementService.update(tires);
    }

    partAction.subscribe(data => {
      this.messageService.showMessage('Tires created!');
      this.submitEvent.emit(tires);
      this.router.navigate(['/parts/tires', 'details', data.id, 'edit']);
    }, error => {
      console.log(error);
      this.messageService.showMessage('Create tires failed!');
    });

  }

}
