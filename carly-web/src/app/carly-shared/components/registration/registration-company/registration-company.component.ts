import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Registration} from '../../../model/registration.model';
import {regCompanyFormFields} from './registration-company-form-fields';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {AuthService} from '../../auth/auth.service';
import {addressFormFields} from '../../../model/address-form-fields';

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
    private authService: AuthService
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

    const registration: Registration.Model = {
      ...this.regCompanyDetailsForm.value
    };

    this.authService.signUpCompany(registration).subscribe(
      data => {
        console.log(100, data);
      }, error => {
        console.log(error);
      }
    );

  }

}
