import {FormGroupHelper} from '../../model/form-group-helper.model';
import {Validators} from '@angular/forms';
import {ValueLabel} from '../../model/value-label';
import {Brake} from '../../model/brakes.model';


export const brakesDetailsFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'name',
    label: 'Name',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'brand',
    label: 'Brand',
    validators: [Validators.required],
    type: 'select',
    cols: 4,
    rows: 1,
    selectOptions: []
  },
  {
    inputName: 'preview',
    label: 'Preview',
    validators: [Validators.required],
    type: 'select',
    cols: 4,
    rows: 1,
    selectOptions: []
  },
  {
    inputName: 'brakeType',
    label: 'Brake type',
    validators: [Validators.required],
    type: 'select',
    cols: 4,
    rows: 1,
    selectOptions: [...Object.values(Brake.BrakeType).map(value => ({label: value, value}))]
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

export const brakes: Array<ValueLabel> = [
  {
    value: 'brakes_1.png',
    label: 'Preview 1'
  },
  {
    value: 'brakes_2.png',
    label: 'Preview 2'
  },
  {
    value: 'brakes_3.png',
    label: 'Preview 3'
  }
];
