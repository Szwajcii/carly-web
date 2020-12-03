import {FormGroupHelper} from '../../model/form-group-helper.model';
import {Validators} from '@angular/forms';
import {ValueLabel} from '../../model/value-label';
import {Wheels} from '../../model/wheels.model';

export const wheelsDetailsFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'brand',
    label: 'Brand',
    validators: [Validators.required],
    type: 'select',
    selectOptions: [],
    cols: 4,
    rows: 1
  },
  {
    inputName: 'name',
    label: 'Name',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'preview',
    label: 'Preview',
    validators: [Validators.required],
    type: 'select',
    selectOptions: [],
    cols: 4,
    rows: 1
  },
  {
    inputName: 'diameter',
    label: 'Diameter',
    validators: [Validators.required],
    type: 'select',
    selectOptions: [...Object.values(Wheels.DiameterType).map(value => ({label: value, value}))],
    cols: 4,
    rows: 1
  },
  {
    inputName: 'price',
    label: 'Price',
    validators: [Validators.required],
    type: 'number',
    cols: 4,
    rows: 1
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
