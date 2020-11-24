import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {FormAction} from '../../../model/form-action.model';
import {Equipment} from '../../../model/equipment.model';
import {Brand} from '../../../model/brand.model';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {EquipmentManagementService} from '../../../resources/equipment-management.service';
import {ValueLabel} from '../../../model/value-label';
import {equipmentDetailsFormFields, equipmentPreviews} from '../equipment-form-fields';
import {BrandManagementService} from '../../../resources/brand-management.service';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.scss']
})
export class EquipmentFormComponent implements OnInit {

  private static PREVIEW = 'preview';

  @Input() isDisabled = false;
  @Input() formAction: FormAction;
  @Input() equipmentModel: Equipment.Model;
  @Input() submitEvent: EventEmitter<Equipment.Model> = new EventEmitter<Equipment.Model>();
  @Input() details = false;

  isCompanyContext = false;
  brands: Array<Brand>;
  equipmentBrand: Brand;
  equipmentPreviews: Array<ValueLabel>;
  equipmentDetailsForm: FormGroup;
  equipmentDetailsFormControls = this.formGroupService.addControlToModel(equipmentDetailsFormFields)
    .map(controlModel => {
      if (controlModel.inputName === EquipmentFormComponent.PREVIEW) {
        controlModel.selectOptions = equipmentPreviews;
      }
      return controlModel;
    });

  constructor(
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private equipmentManagementService: EquipmentManagementService,
    private brandManagementService: BrandManagementService
  ) {
  }

  ngOnInit(): void {
    const companyContextIdObservable = this.brandManagementService.findCompanyContextId();
    if (companyContextIdObservable != null) {
      this.isCompanyContext = true;
      this.equipmentBrand = this.brandManagementService.findBrandFromContext(companyContextIdObservable);
    }
  }

  onSubmit($event) {
    this.equipmentDetailsForm = $event;

    const equipment: Equipment.Model = {
      ...this.equipmentDetailsForm.value
    };

    if (this.isCompanyContext) {
      equipment.brand = this.equipmentBrand;
    }

    this.createOrUpdate(equipment);
  }

  createOrUpdate(equipment: Equipment.Model) {
    let partAction;

    if (this.formAction === FormAction.CREATE) {
      partAction = this.equipmentManagementService.create(equipment);
    } else {
      partAction = this.equipmentManagementService.update(equipment);
    }

    partAction.subscribe(data => {
      this.messageService.showMessage('Equipment created!');
      this.submitEvent.emit(equipment);
      this.router.navigate(['/equipment', 'details', data.id, 'edit']);
    }, error => {
      this.messageService.showMessage('Create equipment failed!');
      console.log(error);
    });
  }
}
