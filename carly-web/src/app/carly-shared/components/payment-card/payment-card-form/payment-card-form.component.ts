import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {PaymentCard} from '../../../model/payment-card.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {paymentCardFormFields} from './payment-card-form-fields';
import {PaymentCardManagementService} from '../../../resources/payment-card-management.service';

@Component({
  selector: 'app-payment-card-form',
  templateUrl: './payment-card-form.component.html',
  styleUrls: ['./payment-card-form.component.scss']
})
export class PaymentCardFormComponent implements OnInit {

  @Input() isDisabled: boolean;
  @Input() paymentCard: PaymentCard.Model;
  @Input() formAction;
  @Input() editCard = false;
  @Output() closeDialog = new EventEmitter();

  gridColumns = 4;

  generalForm: FormGroup;

  paymentCardDetailsForm: FormGroup;
  paymentCardDetailsFormControls = this.formGroupService.addControlToModel(paymentCardFormFields);

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private paymentCardService: PaymentCardManagementService
  ) {
  }

  ngOnInit(): void {

    this.paymentCardDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.paymentCardDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      paymentCardDetailsForm: this.paymentCardDetailsForm
    });

    if (this.paymentCard) {
      this.setFormValue(this.paymentCard);
    }

    if (this.isDisabled) {
      this.generalForm.disable();
    }
  }

  setFormValue(paymentCard: PaymentCard.Model) {
    this.paymentCardDetailsFormControls
      .forEach(control => this.paymentCardDetailsForm
        .get(control.inputName)
        .setValue(paymentCard[control.inputName])
      );
  }

  toggleEdit() {
    this.isDisabled = !this.isDisabled;
    if (this.isDisabled) {
      this.setFormValue(this.paymentCard);
      this.generalForm.disable();
    } else {
      this.generalForm.enable();
    }
  }

  onSubmit() {
    const paymentCard: PaymentCard.Model = {
      ...this.paymentCardDetailsForm.value
    };

    this.createOrUpdate(paymentCard);
  }

  onCancel() {
    this.closeDialog.emit();
  }

  createOrUpdate(paymentCard: PaymentCard.Model) {
    let action;

    if (this.editCard) {
      action = this.paymentCardService.update(paymentCard);
    } else {
      action = this.paymentCardService.create(paymentCard);
    }

    action.subscribe(data => {
      this.messageService.showMessage('Added new payment card!');
    }, error => {
      this.messageService.showMessage('Adding new payment card failed!');
      console.log(error);
    });

  }

}
