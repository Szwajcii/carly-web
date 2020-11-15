import {FormGroupHelper} from '../../model/form-group-helper.model';
import {Validators} from '@angular/forms';

export const changePasswordFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'newPassword',
    label: 'New password',
    validators: [Validators.required],
    type: 'password',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'reNewPassword',
    label: 'Repeat new password',
    validators: [Validators.required],
    type: 'password',
    cols: 4,
    rows: 1
  }
];
