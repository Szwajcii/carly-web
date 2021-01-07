import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {PartType} from '../../../model/part-type.enum';
import {brakesSpecificParts, tiresSpecificParts} from '../../orders/cart-data/cart-test-data';
import {FormGroupHelper} from '../../../model/form-group-helper.model';
import {OrderProcess} from '../../../model/order-process.model';
import {addressFormFields} from '../../../model/address-form-fields';

@Component({
  selector: 'app-order-process-details',
  templateUrl: './order-process-details.component.html',
  styleUrls: ['./order-process-details.component.scss']
})
export class OrderProcessDetailsComponent implements OnInit {

  @Input() orderProcess: OrderProcess.Model;

  parts = new Map([
    [PartType.BRAKES, brakesSpecificParts],
    [PartType.TIRES, tiresSpecificParts]
  ]);

  isDisabled = true;

  gridColumns = 4;
  generalForm: FormGroup;

  shippingDetailsForm: FormGroup;
  shippingDetailsFormControls: FormGroupHelper.ModelControl[];
  shippingAddressFormFields = addressFormFields;


  constructor(
    private formBuilder: FormBuilder,
    private formGroupService: FormGroupHelperService
  ) {
  }

  ngOnInit(): void {
    this.shippingAddressFormFields.forEach(model => {
      model.cols = 4;
    });

    this.shippingDetailsFormControls = this.formGroupService.addControlToModel(this.shippingAddressFormFields);

    this.shippingDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.shippingDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      shippingDetailsForm: this.shippingDetailsForm
    });

    if (this.orderProcess) {
      this.setFormValue(this.orderProcess);
    }

    this.generalForm.disable();

  }

  setFormValue(orderProcess: OrderProcess.Model) {
    this.shippingDetailsFormControls
      .forEach(control => this.shippingDetailsForm
        .get(control.inputName)
        .setValue(orderProcess[control.inputName])
      );
  }

  toggleEdit() {
    this.isDisabled = !this.isDisabled;
    if (this.isDisabled) {
      this.setFormValue(this.orderProcess);
      this.generalForm.disable();
    } else {
      this.generalForm.enable();
    }
  }

}
