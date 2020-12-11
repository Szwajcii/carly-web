import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {FormGroupHelper} from '../../model/form-group-helper.model';
import {MessageService} from '../../services/message.service';
import {FormGroupHelperService} from '../../services/form-group-helper.service';
import {addressFormFields} from '../../model/address-form-fields';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  @Input() isDisabled: boolean;
  @Input() userProfile: any;
  @Input() userProfileFormFields: FormGroupHelper.Model[];
  @Output() submitEvent = new EventEmitter();

  gridColumns = 4;

  generalForm: FormGroup;

  userProfileDetailsForm: FormGroup;
  userProfileDetailsFormControls: FormGroupHelper.ModelControl[];

  addressDetailsForm: FormGroup;
  addressDetailsFormControls: FormGroupHelper.ModelControl[];

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private formGroupService: FormGroupHelperService
  ) {
  }

  ngOnInit(): void {
    this.userProfileDetailsFormControls = this.formGroupService.addControlToModel(this.userProfileFormFields);
    this.addressDetailsFormControls = this.formGroupService.addControlToModel(addressFormFields);

    this.userProfileDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.userProfileDetailsFormControls)
    });

    this.addressDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.addressDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      userProfileDetailsForm: this.userProfileDetailsForm,
      addressDetailsForm: this.addressDetailsForm
    });

    if (this.userProfile) {
      this.setFormValue(this.userProfile);
    }

    if (this.isDisabled) {
      this.generalForm.disable();
    }
  }

  setFormValue(userProfile: any) {
    this.userProfileDetailsFormControls
      .forEach(control => this.userProfileDetailsForm
        .get(control.inputName)
        .setValue(userProfile[control.inputName])
      );

    this.addressDetailsFormControls
      .forEach(control => this.addressDetailsForm
        .get(control.inputName)
        .setValue(userProfile[control.inputName])
      );
  }

  toggleEdit() {
    this.isDisabled = !this.isDisabled;
    if (this.isDisabled) {
      this.setFormValue(this.userProfile);
      this.generalForm.disable();
    } else {
      this.generalForm.enable();
    }
  }

  onSubmit() {
    if (this.userProfileDetailsForm.invalid) {
      return;
    }
    this.submitEvent.emit({
      profileDetails: this.userProfileDetailsForm,
      addressDetails: this.addressDetailsForm
    });
  }

}