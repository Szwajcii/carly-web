import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PaymentCardAddComponent} from './payment-card-add/payment-card-add.component';
import {PaymentCardEditComponent} from './payment-card-edit/payment-card-edit.component';
import {PaymentCard} from '../../model/payment-card.model';
import {PaymentCardManagementService} from '../../resources/payment-card-management.service';

const PAYMENT_CARD_TEST_DATA: PaymentCard.Model = {
  id: '2364938',
  paymentCardNumber: '1234-5678-1234-5678',
  paymentCardProvider: '',
  paymentCardHolder: 'Ford Gmbh',
  expiryDate: '08/22',
  cvvCode: '666'
};

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  private DIALOG_WIDTH = '400px';
  public paymentCardTest = PAYMENT_CARD_TEST_DATA;

  constructor(
    private dialog: MatDialog,
    private paymentCardService: PaymentCardManagementService
  ) {
  }

  ngOnInit(): void {
  }

  viewPaymentCardDetails() {
    this.dialog.open(PaymentCardEditComponent, {
      data: {
        card: PAYMENT_CARD_TEST_DATA
      },
      width: this.DIALOG_WIDTH
    });
  }

  addNewPaymentCard() {
    this.dialog.open(PaymentCardAddComponent, {
      width: this.DIALOG_WIDTH
    });
  }
}
