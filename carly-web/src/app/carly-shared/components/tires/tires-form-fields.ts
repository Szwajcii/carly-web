import {FormGroupHelper} from '../../model/form-group-helper.model';
import {Validators} from '@angular/forms';
import {ValueLabel} from '../../model/value-label';
import {Tires} from "../../model/tires.model";

export const tiresDetailsFormFields: FormGroupHelper.Model[] = [
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
    inputName: 'type',
    label: 'Type',
    validators: [Validators.required],
    type: 'select',
    selectOptions: [...Object.values(Tires.TireType).map(value => ({label: value, value}))]
  },
  {
    inputName: 'price',
    label: 'Price',
    validators: [Validators.required],
    type: 'number'
  }
];


export const tiresPreviews: Array<ValueLabel> = [
  {
    value: 'tires_1.png',
    label: 'Preview 1'
  },
  {
    value: 'tires_2.png',
    label: 'Preview 2'
  },
  {
    value: 'tires_3.png',
    label: 'Preview 3'
  }
];
