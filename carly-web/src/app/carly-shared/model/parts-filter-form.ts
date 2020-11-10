import {Validators} from '@angular/forms';
import {FormGroupHelper} from './form-group-helper.model';

export const partsFilterFormFields: FormGroupHelper.Model[] = [
  {
    inputName: '',
    label: '',
    validators: [Validators.required],
    type: 'text'
  }
];
