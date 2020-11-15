import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {Company} from '../../../model/company.model';
import {MessageService} from '../../../services/message.service';
import {CompanyManagementService} from '../../../resources/company-management.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {companyDetailsFormFields} from './company-form-fields';
import {addressFormFields} from '../../../model/address-form-fields';
import {MatDialog} from "@angular/material/dialog";
import {ChangePasswordComponent} from "../../change-password/change-password.component";

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  @Input() isDisabled: boolean;
  @Input() company: Company.Model;
  @Input() formAction;
  @Input() editCompany = false;

  gridColumns = 4;

  generalForm: FormGroup;

  companyDetailsForm: FormGroup;
  companyDetailsFormControls = this.formGroupService.addControlToModel(companyDetailsFormFields);

  addressDetailsForm: FormGroup;
  addressDetailsFormControls = this.formGroupService.addControlToModel(addressFormFields);

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private formGroupService: FormGroupHelperService,
    private companyManagementService: CompanyManagementService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {

    this.companyDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.companyDetailsFormControls)
    });

    this.addressDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.addressDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      companyDetailsForm: this.companyDetailsForm,
      addressDetailsForm: this.addressDetailsForm
    });

    if (this.company) {
      this.setFormValue(this.company);
    }

    if (this.isDisabled) {
      this.generalForm.disable();
    }

  }

  setFormValue(company: Company.Model) {
    this.companyDetailsFormControls
      .forEach(control => this.companyDetailsForm
        .get(control.inputName)
        .setValue(company[control.inputName])
      );

    this.addressDetailsFormControls
      .forEach(control => this.addressDetailsForm
        .get(control.inputName)
        .setValue(company[control.inputName])
      );
  }

  toggleEdit() {
    this.isDisabled = !this.isDisabled;
    if (this.isDisabled) {
      this.setFormValue(this.company);
      this.generalForm.disable();
    } else {
      this.generalForm.enable();
    }
  }

  openChangePasswordDialog() {
    this.dialog.open(ChangePasswordComponent);
  }

  onSubmit() {

    const company: Company.Model = {
      ...this.companyDetailsForm.value
    };

    company.address = {
      ...this.addressDetailsForm.value
    };

    this.createOrUpdate(company);
  }

  createOrUpdate(company: Company.Model) {
    let action;

    if (this.editCompany) {
      action = this.companyManagementService.update(company);
    } else {
      action = this.companyManagementService.create(company);
    }

    action.subscribe(data => {
      this.messageService.showMessage('Company created!');
      this.router.navigate(['/company', data.id]);
    }, error => {
      this.messageService.showMessage('Create company failed!');
      console.log(error);
    });

  }

}
