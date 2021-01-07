import {FormGroupHelper} from '../../../model/form-group-helper.model';
import {Validators} from '@angular/forms';

export const orderDetailsFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'name',
    label: 'Name',
    validators: [Validators.required],
    type: 'text',
    cols: 2,
    rows: 1
  },
  {
    inputName: 'phoneNumber',
    label: 'Phone number',
    validators: [Validators.required],
    type: 'text',
    cols: 2,
    rows: 1
  },
  {
    inputName: 'email',
    label: 'Email',
    validators: [Validators.required],
    type: 'text',
    cols: 2,
    rows: 1
  }
];
