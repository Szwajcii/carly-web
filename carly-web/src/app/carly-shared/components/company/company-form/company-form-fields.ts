import {FormGroupHelper} from '../../../model/form-group-helper.model';
import {Validators} from '@angular/forms';

export const companyDetailsFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'name',
    label: 'Name',
    validators: [Validators.required],
    type: 'text'
  },
  {
    inputName: '',
    label: '',
    validators: [Validators.required],
    type: ''
  },
  {
    inputName: '',
    label: '',
    validators: [Validators.required],
    type: ''
  },
  {
    inputName: '',
    label: '',
    validators: [Validators.required],
    type: ''
  },
  {
    inputName: '',
    label: '',
    validators: [Validators.required],
    type: ''
  },
  {
    inputName: '',
    label: '',
    validators: [Validators.required],
    type: ''
  }
];
