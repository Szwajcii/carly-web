import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Registration} from '../../../model/registration.model';
import {regCustomerFormFields} from './registration-customer-form-fields';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-registration-customer',
  templateUrl: './registration-customer.component.html',
  styleUrls: ['./registration-customer.component.scss']
})
export class RegistrationCustomerComponent implements OnInit {

  gridColumns = 4;
  isRegistrationSuccess = false;
  errorMessage;
  generalForm: FormGroup;
  regCustomerDetailsForm: FormGroup;
  regCustomerDetailsFormControls = this.formGroupService.addControlToModel(regCustomerFormFields);

  constructor(
    private formBuilder: FormBuilder,
    private formGroupService: FormGroupHelperService,
    private authService: AuthService
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

    const registration: Registration.Model = {
      ...this.regCustomerDetailsForm.value
    };

    this.authService.signUpCustomer(registration).subscribe(
      data => {
        console.log(data);
        this.isRegistrationSuccess = true;
      }, error => {
        this.errorMessage = 'Unexpected error occurred! Please try later!';
        console.log(error);
      }
    );

  }

}
