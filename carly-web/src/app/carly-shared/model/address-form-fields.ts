import {FormGroupHelper} from './form-group-helper.model';
import {Validators} from '@angular/forms';

export const addressFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'street',
    label: 'Street',
    validators: [Validators.required],
    type: 'text'
  },
  {
    inputName: 'number',
    label: 'Number',
    validators: [Validators.required],
    type: 'text'
  },
  {
    inputName: 'flat',
    label: 'Flat',
    validators: [Validators.required],
    type: 'text'
  },
  {
    inputName: 'town',
    label: 'Town',
    validators: [Validators.required],
    type: 'text'
  },
  {
    inputName: 'zipCode',
    label: 'Zip code',
    validators: [Validators.required],
    type: 'text'
  },
  {
    inputName: 'country',
    label: 'Country',
    validators: [Validators.required],
    type: 'select'
  }
];
