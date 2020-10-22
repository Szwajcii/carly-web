import {FormGroupHelper} from '../../model/form-group-helper.model';
import {Validators} from '@angular/forms';
import {ValueLabel} from '../../model/value-label';

export const wheelsDetailsFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'brand',
    label: 'Brand',
    validators: [Validators.required],
    type: 'select',
    selectOptions: []
  },
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
    inputName: 'diameter',
    label: 'Diameter',
    validators: [Validators.required],
    type: 'select',
    selectOptions: []
  },
  {
    inputName: 'weight',
    label: 'Weight',
    validators: [Validators.required],
    type: 'number'
  },
  {
    inputName: 'price',
    label: 'Price',
    validators: [Validators.required],
    type: 'number'
  }
];


export const wheelsPreviews: Array<ValueLabel> = [
  {
    value: 'wheel_1.png',
    label: 'Preview 1'
  },
  {
    value: 'wheel_2.png',
    label: 'Preview 2'
  },
  {
    value: 'wheel_3.png',
    label: 'Preview 3'
  },
  {
    value: 'wheel_4.png',
    label: 'Preview 4'
  },
  {
    value: 'wheel_5.png',
    label: 'Preview 5'
  }
];
