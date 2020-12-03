import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

import {Brake} from '../../../model/brakes.model';
import {ValueLabel} from '../../../model/value-label';
import {FormAction} from '../../../model/form-action.model';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {BrakesManagementService} from '../../../resources/brakes-management.service';
import {brakesDetailsFormFields, brakes} from '../brakes-form-fields';
import {Brand} from '../../../model/brand.model';
import {BrandManagementService} from '../../../resources/brand-management.service';

@Component({
  selector: 'app-brakes-form',
  templateUrl: './brakes-form.component.html',
  styleUrls: ['./brakes-form.component.scss']
})
export class BrakesFormComponent implements OnInit {

  private static PREVIEW = 'preview';

  @Input() isDisabled = false;
  @Input() formAction: FormAction;
  @Input() brakesModel: Brake.Model;
  @Input() submitEvent: EventEmitter<Brake.Model> = new EventEmitter<Brake.Model>();
  @Input() details = false;

  isCompanyContext = false;
  brands: Array<Brand>;
  brakesBrand: Brand;
  brakesPreviews: Array<ValueLabel>;
  brakesDetailsForm: FormGroup;
  brakesDetailsFormControls = this.formGroupService.addControlToModel(brakesDetailsFormFields)
    .map(controlModel => {
      if (controlModel.inputName === BrakesFormComponent.PREVIEW) {
        controlModel.selectOptions = brakes;
      }
      return controlModel;
    });


  constructor(
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private brakesManagementService: BrakesManagementService,
    private brandManagementService: BrandManagementService
  ) {
  }

  ngOnInit(): void {
    this.brakesPreviews = brakes;
    const companyContextIdObservable = this.brandManagementService.findCompanyContextId();
    if (companyContextIdObservable != null) {
      this.isCompanyContext = true;
      this.brakesBrand = this.brandManagementService.findBrandFromContext(companyContextIdObservable);
    }
  }

  // Take event from PartForm component
  onSubmit($event) {
    this.brakesDetailsForm = $event;

    const brakes: Brake.Model = {
      ...this.brakesDetailsForm.value
    };

    if (this.isCompanyContext) {
      debugger;
      brakes.brand = this.brakesBrand;
    }

    this.createOrUpdate(brakes);
  }

  createOrUpdate(brakes: Brake.Model) {
    let partAction;

    if (this.formAction === FormAction.CREATE) {
      partAction = this.brakesManagementService.create(brakes);
    } else {
      partAction = this.brakesManagementService.update(brakes);
    }

    partAction.subscribe(data => {
      this.messageService.showMessage('Brakes created!');
      this.submitEvent.emit(brakes);
      this.router.navigate(['/brakes', 'details', data.id, 'edit']);
    }, error => {
      this.messageService.showMessage('Create brakes failed!');
      console.log(error);
    });
  }


}
