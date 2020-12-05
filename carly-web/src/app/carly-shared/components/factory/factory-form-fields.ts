import {Validators} from '@angular/forms';
import {FormGroupHelper} from '../../model/form-group-helper.model';

export const factoryDetailsFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'companyName',
    label: 'Company name',
    validators: [Validators.required],
    type: 'text',
    cols: 2,
    rows: 1
  },
  {
    inputName: 'phone',
    label: 'Phone number',
    validators: [Validators.required],
    type: 'text',
    cols: 2,
    rows: 1,
    selectOptions: [{value: 'One', label: 'One'}]
  },
  {
    inputName: 'email',
    label: 'Email',
    validators: [Validators.required],
    type: 'text',
    cols: 2,
    rows: 1,
    isDisabled: true
  }
];
