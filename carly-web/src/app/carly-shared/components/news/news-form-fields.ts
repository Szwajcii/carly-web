import {FormGroupHelper} from '../../model/form-group-helper.model';
import {Validators} from '@angular/forms';
import {ValueLabel} from '../../model/value-label';

export const newsFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'title',
    label: 'Title',
    validators: [Validators.required],
    type: 'text'
  },
  {
    inputName: 'description',
    label: 'Description',
    validators: [Validators.required],
    type: 'textarea'
  },
  {
    inputName: 'image',
    label: 'Image',
    validators: [Validators.required],
    type: 'select',
    selectOptions: []
  },
  {
    inputName: 'newsType',
    label: 'News type',
    validators: [Validators.required],
    type: 'select',
    selectOptions: []
  }
];


export const newsImagePreviews: Array<ValueLabel> = [
  {
    label: '',
    value: ''
  }
];
