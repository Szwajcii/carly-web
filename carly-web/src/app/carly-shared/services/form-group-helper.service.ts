import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable()
export class FormGroupHelperService {


  // Helper method to debug form controls
  public findInvalidControls(formGroup: FormGroup) {
    const invalidControlNames = [];
    const controls = formGroup.controls;
    for (const controlName in controls) {
      if (controls[controlName].invalid) {
        invalidControlNames.push(controlName);
      }
    }
    return invalidControlNames;
  }

}
