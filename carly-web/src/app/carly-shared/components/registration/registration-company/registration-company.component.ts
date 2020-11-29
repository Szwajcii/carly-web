import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Registration} from '../../../model/registration.model';
import {regCompanyFormFields} from './registration-company-form-fields';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {AuthService} from '../../auth/auth.service';
import {addressFormFields} from '../../../model/address-form-fields';
import {MatDialogRef} from '@angular/material/dialog';
import {RegistrationComponent} from '../registration.component';

@Component({
  selector: 'app-registration-company',
  templateUrl: './registration-company.component.html',
  styleUrls: ['./registration-company.component.scss']
})
export class RegistrationCompanyComponent implements OnInit {

  gridColumns = 4;
  generalForm: FormGroup;

  regCompanyDetailsForm: FormGroup;
  regCompanyDetailsFormControls = this.formGroupService.addControlToModel(regCompanyFormFields);

  addressDetailsForm: FormGroup;
  addressDetailsFormControls = this.formGroupService.addControlToModel(addressFormFields);

  constructor(
    private formBuilder: FormBuilder,
    private formGroupService: FormGroupHelperService,
    private authService: AuthService,
    private dialogRef: MatDialogRef<RegistrationComponent>
  ) {
  }

  ngOnInit(): void {

    this.regCompanyDetailsForm = this.formBuilder.group(
      this.formGroupService.getControlsFromModel(this.regCompanyDetailsFormControls)
    );

    this.addressDetailsForm = this.formBuilder.group(
      this.formGroupService.getControlsFromModel(this.addressDetailsFormControls)
    );

    this.generalForm = this.formBuilder.group({
      companyDetails: this.regCompanyDetailsForm,
      addressDetails: this.addressDetailsForm
    });

  }

  onSubmit() {
    if (this.generalForm.get('companyDetails').invalid) {
      return;
    }

    // Because we have nested component in dialog component
    // we need to set property by using reference to this dialog
    this.dialogRef.componentInstance.loading = true;

    const registration: Registration.Model = {
      ...this.regCompanyDetailsForm.value
    };

    this.authService.signUpCompany(registration).subscribe(
      data => {
        this.onRegistrationSuccess();
        console.log(100, data);
      }, error => {
        this.onRegistrationFailure();
        console.log(error);
      }
    );

  }

  onRegistrationSuccess() {
    this.dialogRef.componentInstance.title = 'Success! Welcome on board!';
    this.dialogRef.componentInstance.message = 'Please check your email to continue.';
    this.dialogRef.componentInstance.isSuccess = true;
    this.dialogRef.componentInstance.isRegistration = false;
    this.dialogRef.componentInstance.loading = false;
  }

  onRegistrationFailure() {
    this.dialogRef.componentInstance.title = 'Success! Welcome on board!';
    this.dialogRef.componentInstance.message = 'Unexpected error occurred! Please try later!';
    this.dialogRef.componentInstance.isSuccess = false;
    this.dialogRef.componentInstance.isRegistration = false;
    this.dialogRef.componentInstance.loading = false;
  }

}
