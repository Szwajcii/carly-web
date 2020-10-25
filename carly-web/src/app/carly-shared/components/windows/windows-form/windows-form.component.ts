import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

import {Windows} from '../../../model/windows.model';
import {ValueLabel} from '../../../model/value-label';
import {PartFormAction} from '../../../model/part-form-action.model';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {WindowsManagementService} from '../../../resources/windows-management.service';
import {windowsDetailsFormFields, windowsPreviews} from '../windows-form-fields';

@Component({
  selector: 'app-windows-form',
  templateUrl: './windows-form.component.html',
  styleUrls: ['./windows-form.component.scss']
})
export class WindowsFormComponent implements OnInit {

  private static PREVIEW = 'preview';

  @Input() isDisabled = false;
  @Input() formAction: PartFormAction;
  @Input() windowsModel: Windows.Model;
  @Input() submitEvent: EventEmitter<Windows.Model> = new EventEmitter<Windows.Model>();
  @Input() details = false;

  windowsPreviews: Array<ValueLabel>;
  windowsDetailsForm: FormGroup;
  windowsDetailsFormControls = this.formGroupService.addControlToModel(windowsDetailsFormFields)
    .map(controlModel => {
      if (controlModel.inputName === WindowsFormComponent.PREVIEW) {
        controlModel.selectOptions = windowsPreviews;
      }
      return controlModel;
    });

  constructor(
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private windowsManagementService: WindowsManagementService
  ) {
  }

  ngOnInit(): void {
    this.windowsPreviews = windowsPreviews;
  }

  onSubmit($event) {
    this.windowsDetailsForm = $event;

    const windows: Windows.Model = {
      ...this.windowsDetailsForm.value
    };

    this.createOrUpdate(windows);

  }

  createOrUpdate(windows: Windows.Model) {
    let partAction;

    if (this.formAction === PartFormAction.CREATE) {
      partAction = this.windowsManagementService.create(windows);
    } else {
      partAction = this.windowsManagementService.update(windows);
    }

    partAction.subscribe(data => {
      this.messageService.showMessage('Windows created!');
      this.submitEvent.emit(windows);
      this.router.navigate(['/parts/windows', 'details', data.id, 'edit']);
    }, error => {
      this.messageService.showMessage('Create window failed!');
      console.log(error);
    });
  }

}
