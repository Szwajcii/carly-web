import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {FormGroupHelper} from '../../../model/form-group-helper.model';
import {ValueLabel} from '../../../model/value-label';
import {BrandManagementService} from '../../../resources/brand-management.service';
import {Brand} from '../../../model/brand.model';

@Component({
  selector: 'app-parts-form',
  templateUrl: './parts-form.component.html',
  styleUrls: ['./parts-form.component.scss']
})
export class PartsFormComponent implements OnInit {

  private static PREVIEW = 'preview';
  private static BRAND = 'brand';

  @Input() partModel: any;
  @Input() partInputFields: FormGroupHelper.Model[];
  @Input() partFormDetailsControls: FormGroupHelper.ModelControl[];
  @Input() partType: string;
  @Input() partPreviews: Array<ValueLabel>;
  @Input() isDisabled: boolean;
  @Input() editable = false;
  @Input() details = false;
  @Output() submitEvent = new EventEmitter();

  isFactoryContext = false;
  generalForm: FormGroup;
  partDetailsForm: FormGroup;
  gridColumns = 4;
  partBrand: Brand;

  // todo: Consider adding breakpointService
  constructor(
    private formBuilder: FormBuilder,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private brandManagementService: BrandManagementService
  ) {
  }

  ngOnInit(): void {
    this.isFactoryContext = this.brandManagementService.isFactoryContext();
    if (this.isFactoryContext) {
      const factoryContextId = this.brandManagementService.findFactoryContextId();
      this.partBrand = this.brandManagementService.findBrandFromContext(factoryContextId);
      // If we are logged as Company user - brand is set from context.
      this.partFormDetailsControls = this.partFormDetailsControls
        .filter(control => control.inputName !== PartsFormComponent.BRAND);
    } else {
      this.partBrand = this.partModel.brand;
    }

    this.partDetailsForm = this.formBuilder.group(
      this.formGroupService.getControlsFromModel(this.partFormDetailsControls)
    );

    this.generalForm = this.formBuilder.group({
      partDetailsForm: this.partDetailsForm
    });

    this.partDetailsForm.get(PartsFormComponent.PREVIEW).setValue(this.partPreviews[0].value);

    if (this.partModel) {
      this.setFormValue(this.partModel);
    }

    if (this.isDisabled) {
      this.partDetailsForm.disable();
    }

    // Method used for debug form controls
    this.partDetailsForm.valueChanges.subscribe(() => {
      console.log(100, this.partDetailsForm.controls);
      console.log(110, this.formGroupService.findInvalidControls(this.partDetailsForm));
    });
  }

  setFormValue(partModel: any) {
    this.partFormDetailsControls
      .forEach(control => this.partDetailsForm
        .get(control.inputName)
        .setValue(partModel[control.inputName]));

    if (!this.isFactoryContext) {
      this.partDetailsForm.get(PartsFormComponent.BRAND).setValue(this.partModel.brand.name);
    }
  }

  mapBrandsToValueLabel(brands: Brand[]): ValueLabel[] {
    return brands.map(brand => ({label: brand.name, value: brand.carlyFactoryId}));
  }

  getPartPreview(): string {
    return this.partDetailsForm.get(PartsFormComponent.PREVIEW).value;
  }

  onSubmit() {
    if (this.partDetailsForm.invalid) {
      return;
    }
    this.submitEvent.emit({
      formValue: this.partDetailsForm,
      partBrand: this.partBrand
    });
  }

  goBack() {
    this.router.navigate(['/' + this.partType]);
  }

  changeMode() {
    if (this.isDisabled === false) {
      this.isDisabled = true;
      this.setFormValue(this.partModel);
      this.partDetailsForm.disable();
    } else {
      this.isDisabled = false;
      this.partDetailsForm.enable();

      if (!this.isFactoryContext) {
        this.partDetailsForm.get(PartsFormComponent.BRAND).disable();
      }

    }
  }

}
