import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

import {Engine} from '../../../model/engine.model';
import {ValueLabel} from '../../../model/value-label';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {EngineManagementService} from '../../../resources/engine-management.service';
import {FormAction} from '../../../model/form-action.model';
import {engineDetailsFormFields, enginePreviews} from '../engines-form-fields';
import {Brand} from '../../../model/brand.model';
import {BrandManagementService} from '../../../resources/brand-management.service';

@Component({
  selector: 'app-engine-form',
  templateUrl: './engine-form.component.html',
  styleUrls: ['./engine-form.component.scss']
})
export class EngineFormComponent implements OnInit {

  private static PREVIEW = 'preview';

  @Input() isDisabled = false;
  @Input() formAction: FormAction;
  @Input() engineModel: Engine.Model;
  @Input() submitEvent: EventEmitter<Engine.Model> = new EventEmitter<Engine.Model>();
  @Input() details = false;

  isCompanyContext = false;
  brands: Array<Brand>;
  engineBrand: Brand;
  enginePreviews: Array<ValueLabel>;
  engineDetailsForm: FormGroup;
  engineDetailsFormControls = this.formGroupService.addControlToModel(engineDetailsFormFields)
    .map(controlModel => {
      if (controlModel.inputName === EngineFormComponent.PREVIEW) {
        controlModel.selectOptions = enginePreviews;
      }
      return controlModel;
    });

  constructor(
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private engineManagementService: EngineManagementService,
    private brandManagementService: BrandManagementService
  ) {
  }

  ngOnInit(): void {
    this.enginePreviews = enginePreviews;
    const companyContextIdObservable = this.brandManagementService.findCompanyContextId();
    if (companyContextIdObservable != null) {
      this.isCompanyContext = true;
      this.engineBrand = this.brandManagementService.findBrandFromContext(companyContextIdObservable);
    }
  }

  onSubmit($event) {
    this.engineDetailsForm = $event;

    const engine: Engine.Model = {
      ...this.engineDetailsForm.value
    };

    if (this.isCompanyContext) {
      engine.brand = this.engineBrand;
    }

    this.createOrUpdate(engine);
  }

  createOrUpdate(engine: Engine.Model) {
    let partAction;

    if (this.formAction === FormAction.CREATE) {
      partAction = this.engineManagementService.create(engine);
    } else {
      engine.id = this.engineModel.id;
      partAction = this.engineManagementService.update(engine);
    }

    partAction.subscribe(data => {
      this.messageService.showMessage('Engine created!');
      this.submitEvent.emit(engine);
      this.router.navigate(['/engines', 'details', data.id]);
    }, error => {
      this.messageService.showMessage('Create engine failed!');
      console.log(error);
    });
  }

}
