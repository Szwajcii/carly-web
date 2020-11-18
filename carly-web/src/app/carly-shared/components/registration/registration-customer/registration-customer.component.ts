import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Registration} from '../../../model/registration.model';
import {regCustomerFormFields} from './registration-customer-form-fields';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {AuthService} from '../../auth/auth.service';
import {MatDialogRef} from '@angular/material/dialog';
import {RegistrationComponent} from '../registration.component';


@Component({
  selector: 'app-registration-customer',
  templateUrl: './registration-customer.component.html',
  styleUrls: ['./registration-customer.component.scss']
})
export class RegistrationCustomerComponent implements OnInit {

  gridColumns = 4;
  generalForm: FormGroup;
  regCustomerDetailsForm: FormGroup;
  regCustomerDetailsFormControls = this.formGroupService.addControlToModel(regCustomerFormFields);

  constructor(
    private formBuilder: FormBuilder,
    private formGroupService: FormGroupHelperService,
    private authService: AuthService,
    private dialogRef: MatDialogRef<RegistrationComponent>
  ) {
  }

  ngOnInit(): void {

    this.regCustomerDetailsForm = this.formBuilder.group(
      this.formGroupService.getControlsFromModel(this.regCustomerDetailsFormControls)
    );

    this.generalForm = this.formBuilder.group({
      regCustomerDetailsForm: this.regCustomerDetailsForm
    });
  }

  onSubmit() {

    // Because we have nested component in dialog component
    // we need to set property by using reference to this dialog
    this.dialogRef.componentInstance.loading = true;

    const registration: Registration.Model = {
      ...this.regCustomerDetailsForm.value
    };

    this.authService.signUpCustomer(registration).subscribe(
      data => {
        console.log(data);
        this.onRegistrationSuccess();
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
