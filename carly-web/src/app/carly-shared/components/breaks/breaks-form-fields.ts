import {FormGroupHelper} from '../../model/form-group-helper.model';
import {Validators} from '@angular/forms';
import {ValueLabel} from '../../model/value-label';
import {Breaks} from '../../model/breaks.model';


export const breaksDetailsFormFields: FormGroupHelper.Model[] = [
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
    inputName: 'breaksType',
    label: 'Breaks type',
    validators: [Validators.required],
    type: 'select',
    cols: 4,
    rows: 1,
    selectOptions: [...Object.values(Breaks.BreaksType).map(value => ({label: value, value}))]
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
