import {Component, Inject, OnInit} from '@angular/core';
import {PaymentCard} from '../../../model/payment-card.model';
import {FormAction} from '../../../model/form-action.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-payment-card-edit',
  templateUrl: './payment-card-edit.component.html',
  styleUrls: ['./payment-card-edit.component.scss']
})
export class PaymentCardEditComponent implements OnInit {

  isDisabled = true;
  paymentCard: PaymentCard.Model;
  formAction: FormAction.EDIT;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
  }

  ngOnInit(): void {
    this.paymentCard = this.data.card;
  }

}
