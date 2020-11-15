import {FormGroupHelper} from '../../../model/form-group-helper.model';
import {Validators} from '@angular/forms';
import {CarModel} from '../../../model/car-model.model';

export const carModelFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'name',
    label: 'Model name',
    validators: [Validators.required],
    type: '',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'brand',
    label: 'Brand',
    validators: [Validators.required],
    type: 'select',
    selectOptions: [...Object.values(CarModel.CarVariant).map(value => ({label: value, value}))],
    cols: 4,
    rows: 1
  },
  {
    inputName: 'variant',
    label: 'Variant',
    validators: [Validators.required],
    type: 'select',
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
