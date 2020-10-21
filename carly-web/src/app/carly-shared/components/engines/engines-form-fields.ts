import {FormGroupHelper} from '../../model/form-group-helper.model';
import {Validators} from '@angular/forms';
import {ValueLabel} from '../../model/value-label';
import {Engine} from '../../model/engine.model';

export const engineDetailsFormFields: FormGroupHelper.Model[] = [
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
    inputName: 'horsePower',
    label: 'Horse Power',
    validators: [Validators.required],
    type: 'number'
  },
  {
    inputName: 'capacity',
    label: 'Capacity',
    validators: [Validators.required],
    type: 'number'
  },
  {
    inputName: 'numberOfCylinders',
    label: 'Number of cylinders',
    validators: [Validators.required],
    type: 'select',
    selectOptions: [...Object.values(Engine.CylinderType).map(value => ({label: value, value}))]
  },
  {
    inputName: 'price',
    label: 'Price',
    validators: [Validators.required],
    type: 'number'
  }
];

export const enginePreviews: Array<ValueLabel> = [
  {
    value: 'engine_1.png',
    label: 'Preview 1'
  },
  {
    value: 'engine_2.png',
    label: 'Preview 2'
  },
  {
    value: 'engine_3.png',
    label: 'Preview 3'
  }
];
