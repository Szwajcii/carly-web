import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormGroupHelperService} from '../../services/form-group-helper.service';
import {changePasswordFormFields} from './change-password-form-fields';
import {ChangePassword} from '../../model/change-password.model';
import {PasswordManagementService} from '../../resources/password-management.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  isSuccess: boolean;
  gridColumns = 4;
  generalForm: FormGroup;
  responseMessage: string;

  passwordDetailsForm: FormGroup;
  passwordDetailsFormControls = this.formGroupService.addControlToModel(changePasswordFormFields);

  constructor(
    private formBuilder: FormBuilder,
    private formGroupService: FormGroupHelperService,
    private passwordService: PasswordManagementService,
    private dialog: MatDialogRef<ChangePasswordComponent>
  ) {
  }

  ngOnInit(): void {

    this.passwordDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.passwordDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      passwordDetailsForm: this.passwordDetailsForm
    });
  }

  onSubmit() {
    const changePassword: ChangePassword = {
      ...this.generalForm.value
    };

    this.passwordService.changePassword(changePassword).subscribe(resData => {
      this.responseMessage = resData.message;
      this.isSuccess = true;
    }, error => {
      console.log(error);
      this.responseMessage = 'Change password has failed!';
      this.isSuccess = false;
    });
  }

  onCancel() {
    this.dialog.close();
  }

}
