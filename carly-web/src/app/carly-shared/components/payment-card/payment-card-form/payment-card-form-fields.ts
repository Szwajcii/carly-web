import {Validators} from '@angular/forms';
import {FormGroupHelper} from '../../../model/form-group-helper.model';

export const paymentCardFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'creditCardProvider',
    label: 'Credit card provider',
    validators: [Validators.required],
    type: 'select',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'creditCardNumber',
    label: 'Credit card number',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'expiryDate',
    label: 'Expiry date',
    validators: [Validators.required],
    type: 'date',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'cvvCode',
    label: 'CVV code',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  }
];
