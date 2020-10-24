import {FormGroupHelper} from '../../model/form-group-helper.model';
import {Validators} from '@angular/forms';

export const windowsDetailsFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'name',
    label: 'Name',
    validators: [Validators.required],
    type: 'text'
  },
  {
    inputName: 'preview',
    label: 'Preview',
    validators: [Validators.required],
    type: 'select',
    selectOptions: []
  },
  {
    inputName: 'type',
    label: 'Type',
    validators: [Validators.required],
    type: 'select',
    selectOptions: []
  },
  {
    inputName: 'price',
    label: 'Price',
    validators: [Validators.required],
    type: 'number'
  }
];