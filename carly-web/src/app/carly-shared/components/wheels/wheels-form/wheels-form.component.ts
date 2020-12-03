import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {Wheels} from '../../../model/wheels.model';
import {ValueLabel} from '../../../model/value-label';
import {FormAction} from '../../../model/form-action.model';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {WheelsManagementService} from '../../../resources/wheels-management.service';
import {wheelsDetailsFormFields, wheelsPreviews} from '../wheels-form-fields';
import {BrandManagementService} from '../../../resources/brand-management.service';
import {Brand} from '../../../model/brand.model';

@Component({
  selector: 'app-wheels-form',
  templateUrl: './wheels-form.component.html',
  styleUrls: ['./wheels-form.component.scss']
})
export class WheelsFormComponent implements OnInit {

  private static PREVIEW = 'preview';

  @Input() isDisabled = false;
  @Input() formAction: FormAction;
  @Input() wheelsModel: Wheels.Model;
  @Input() submitEvent: EventEmitter<Wheels.Model> = new EventEmitter<Wheels.Model>();
  @Input() details = false;

  isCompanyContext = false;
  brands: Array<Brand>;
  wheelsBrand: Brand;
  wheelsPreview: Array<ValueLabel>;
  wheelsDetailsForm: FormGroup;
  wheelsDetailsFormControls = this.formGroupService.addControlToModel(wheelsDetailsFormFields)
    .map(controlModel => {
      if (controlModel.inputName === WheelsFormComponent.PREVIEW) {
        controlModel.selectOptions = wheelsPreviews;
      }
      return controlModel;
    });

  constructor(
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private wheelsManagementService: WheelsManagementService,
    private brandManagementService: BrandManagementService
  ) {
  }

  ngOnInit(): void {
    this.wheelsPreview = wheelsPreviews;
    const companyContextIdObservable = this.brandManagementService.findCompanyContextId();
    if (companyContextIdObservable != null) {
      this.isCompanyContext = true;
      this.wheelsBrand = this.brandManagementService.findBrandFromContext(companyContextIdObservable);
    }
  }

  onSubmit($event) {
    this.wheelsDetailsForm = $event;

    const wheels: Wheels.Model = {
      ...this.wheelsDetailsForm.value
    };

    if (this.isCompanyContext) {
      wheels.brand = this.wheelsBrand;
    }

    this.createOrUpdate(wheels);
  }

  createOrUpdate(wheels: Wheels.Model) {
    let partAction;

    if (this.formAction === FormAction.CREATE) {
      partAction = this.wheelsManagementService.create(wheels);
    } else {
      wheels.id = this.wheelsModel.id;
      partAction = this.wheelsManagementService.update(wheels);
    }

    partAction.subscribe(data => {
      const action = this.formAction === FormAction.CREATE ? 'created!' : 'updated!';
      this.messageService.showMessage('Wheels ' + action);
      this.submitEvent.emit(wheels);
      this.router.navigate(['/wheels', 'details', data.id]);
    }, error => {
      this.messageService.showMessage('Create wheels failed!');
      console.log(error);
    });
  }

}
