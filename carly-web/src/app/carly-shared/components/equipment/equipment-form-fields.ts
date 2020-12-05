import {Validators} from '@angular/forms';
import {ValueLabel} from '../../model/value-label';
import {FormGroupHelper} from '../../model/form-group-helper.model';
import {Equipment} from '../../model/equipment.model';

export const equipmentDetailsFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'brand',
    label: 'Brand',
    validators: [Validators.required],
    type: 'text',
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
    inputName: 'type',
    label: 'Type',
    validators: [Validators.required],
    type: 'select',
    cols: 4,
    rows: 1,
    selectOptions: [...Object.values(Equipment.EquipmentType).map(value => ({label: value, value}))]
  },
  {
    inputName: 'partPrice',
    label: 'Price',
    validators: [Validators.required],
    type: 'number',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'preview',
    label: 'Preview',
    validators: [Validators.required],
    type: 'select',
    cols: 4,
    rows: 1,
    selectOptions: []
  }
];

export const equipmentPreviews: Array<ValueLabel> = [
  {
    value: 'equipment.png',
    label: 'Preview 1'
  }
];
