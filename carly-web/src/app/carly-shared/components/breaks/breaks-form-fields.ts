import {FormGroupHelper} from '../../model/form-group-helper.model';
import {Validators} from '@angular/forms';
import {ValueLabel} from '../../model/value-label';


export const breaksDetailsFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'name',
    label: 'Name',
    validators: [Validators.required],
    type: 'text'
  },
  {
    inputName: 'brand',
    label: 'Brand',
    validators: [Validators.required],
    type: 'select',
    selectOptions: []
  },
  {
    inputName: 'preview',
    label: 'Preview',
    validators: [Validators.required],
    type: 'select',
    selectOptions: []
  },
  {
    inputName: 'breaksType',
    label: 'Breaks type',
    validators: [Validators.required],
    type: 'select',
    // todo: Add select options
    selectOptions: []
  },
  {
    inputName: 'price',
    label: 'Price',
    validators: [Validators.required],
    type: 'number'
  }
];

export const breaksPreviews: Array<ValueLabel> = [
  {
    value: 'breaks_1.png',
    label: 'Preview 1'
  },
  {
    value: 'breaks_2.png',
    label: 'Preview 2'
  },
  {
    value: 'breaks_3.png',
    label: 'Preview 3'
  }
];
