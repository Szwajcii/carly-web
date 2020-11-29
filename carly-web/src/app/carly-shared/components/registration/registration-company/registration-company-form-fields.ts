import {FormGroupHelper} from '../../../model/form-group-helper.model';
import {Validators} from '@angular/forms';
import {Roles} from '../../../model/roles.model';

export const regCompanyFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'companyName',
    label: 'Company name',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1,
    errors: [
      {
        message: 'Please provide company name!',
        validator: 'required'
      }
    ]
  },
  {
    inputName: 'phone',
    label: 'Phone number',
    validators: [Validators.required],
    type: 'text',
    rows: 1,
    cols: 4,
  },
  {
    inputName: 'email',
    label: 'E-mail',
    validators: [Validators.required, Validators.pattern('')],
    type: 'text',
    cols: 4,
    rows: 1,
    errors: [
      {
        message: 'Please provide e-mail address!',
        validator: 'required'
      },
      {
        message: 'Please enter valid e-mail.',
        validator: 'pattern'
      }
    ]
  },
  {
    inputName: 'password',
    label: 'Password',
    validators: [Validators.required, Validators.minLength(6)],
    type: 'password',
    cols: 4,
    rows: 1,
    errors: [
      {
        message: 'Please provide password!',
        validator: 'required'
      }
    ]
  },
  {
    inputName: 'rePassword',
    label: 'Repeat password',
    validators: [Validators.required, Validators.minLength(6)],
    type: 'password',
    cols: 4,
    rows: 1,
    errors: [
      {
        message: 'Please repeat password',
        validator: 'required'
      }
    ]
  },
  {
    inputName: 'role',
    label: 'Company type',
    validators: [Validators.required],
    type: 'select',
    cols: 4,
    rows: 1,
    selectOptions: [
      {label: 'Distributor', value: Roles.CARLY_COMPANY},
      {label: 'Factory', value: Roles.CARLY_FACTORY}
    ]
  }
];
