import {Validators} from '@angular/forms';
import {FormGroupHelper} from '../../model/form-group-helper.model';

export const customerFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'firstName',
    label: 'First name',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'lastName',
    label: 'Last name',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'gender',
    label: 'Gender',
    validators: [Validators.required],
    type: 'select',
    selectOptions: [],
    cols: 4,
    rows: 1
  },
  {
    inputName: 'phoneNumber',
    label: 'Phone number',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  }
];
