import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {UserManagementService} from '../../../resources/user-management.service';
import {userFormFields} from '../user-form-fields';
import {addressFormFields} from '../../../model/address-form-fields';
import {User} from '../../../model/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() isDisabled: boolean;
  @Input() user: User;
  @Input() formAction;

  gridColumns = 4;

  generalForm: FormGroup;

  userDetailsForm: FormGroup;
  userDetailsFormControls = this.formGroupService.addControlToModel(userFormFields);

  addressDetailsForm: FormGroup;
  addressDetailsFormControls = this.formGroupService.addControlToModel(addressFormFields);

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private formGroupService: FormGroupHelperService,
    private userManagementService: UserManagementService
  ) {
  }

  ngOnInit(): void {

    this.userDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.userDetailsFormControls)
    });

    this.addressDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.addressDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      userDetailsForm: this.userDetailsForm,
      addressDetailsForm: this.addressDetailsForm
    });

    if (this.user) {
      this.setFormValue(this.user);
    }

    if (this.isDisabled) {
      this.generalForm.disable();
    }

  }

  setFormValue(user: User) {
    this.userDetailsFormControls
      .forEach(control => this.userDetailsForm
        .get(control.inputName)
        .setValue(user[control.inputName])
      );

    this.addressDetailsFormControls
      .forEach(control => this.addressDetailsForm
        .get(control.inputName)
        .setValue(user[control.inputName])
      );
  }

  toggleEdit() {
    this.isDisabled = !this.isDisabled;
    if (this.isDisabled) {
      // FIXME: Uncomment after getting user from context
      // this.setFormValue(this.user);
      this.generalForm.disable();
    } else {
      this.generalForm.enable();
    }
  }

  onSubmit() {

    const user: User = {
      ...this.userDetailsForm.value
    };

    user.address = {
      ...this.addressDetailsForm.value
    };

    this.updateUser(user);
  }


  updateUser(user: User) {
    let action;

    action = this.userManagementService.update(user);

    action.subscribe(resData => {
      this.messageService.showMessage('User updated!');
      this.router.navigate(['/details', resData.id]);
    }, error => {
      this.messageService.showMessage('Update user failed!');
      console.log(error);
    });
  }

  goBack() {

  }

}
