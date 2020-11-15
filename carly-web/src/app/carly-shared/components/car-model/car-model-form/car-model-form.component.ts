import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {CarModelManagementService} from '../../../resources/car-model-management.service';
import {AuthService} from '../../auth/auth.service';
import {FormAction} from '../../../model/form-action.model';
import {CarModel} from '../../../model/car-model.model';
import {Brand} from '../../../model/brand.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {carModelFormFields} from './car-model-form-fields';

@Component({
  selector: 'app-car-model-form',
  templateUrl: './car-model-form.component.html',
  styleUrls: ['./car-model-form.component.scss']
})
export class CarModelFormComponent implements OnInit {

  private static PREVIEW = 'preview';

  @Input() isDisabled = false;
  @Input() formAction: FormAction;
  @Input() carModel: CarModel.Model;
  @Input() details = false;

  brands: Array<Brand>;
  carModelDetailsForm: FormGroup;
  carModelDetailsFormControls = this.formGroupService.addControlToModel(carModelFormFields);

  generalForm: FormGroup;
  gridColumns = 4;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private carModelManagementService: CarModelManagementService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.findBrands();

    this.carModelDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.carModelDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      carModelDetailsForm: this.carModelDetailsForm
    });

    if (this.carModel) {
      this.setFormValue(this.carModel);
    }

    if (this.isDisabled) {
      this.generalForm.disable();
    }
  }

  findBrands() {

  }

  setFormValue(carModel: CarModel.Model) {
    this.carModelDetailsFormControls
      .forEach(control => this.carModelDetailsForm
        .get(control.inputName)
        .setValue(carModel[control.inputName])
      );
  }

  toggleEdit() {
    this.isDisabled = !this.isDisabled;
    if (this.isDisabled) {
      this.setFormValue(this.carModel);
      this.generalForm.disable();
    } else {
      this.generalForm.enable();
    }
  }

  onSubmit() {
    if (this.generalForm.invalid) {
      return;
    }
    const carModel: CarModel.Model = {
      ...this.generalForm.value
    };

    this.createOrUpdate(carModel);
  }

  createOrUpdate(carModel: CarModel.Model) {
    let action;

    if (this.formAction === FormAction.CREATE) {
      action = this.carModelManagementService.create(carModel);
    } else {
      action = this.carModelManagementService.update(carModel);
    }

    action.subscribe(resData => {
      this.messageService.showMessage('Car model created!');
      this.router.navigate(['/car-model', 'details', resData.id, 'edit']);
    }, error => {
      this.messageService.showMessage('Create car model failed!');
      console.log(error);
    });

  }

  delete() {

  }

  onCancel() {
    this.router.navigate(['/car-model']);
  }

}
