import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PaymentCardAddComponent} from './payment-card-add/payment-card-add.component';
import {PaymentCardEditComponent} from './payment-card-edit/payment-card-edit.component';
import {PaymentCard} from '../../model/payment-card.model';
import {PaymentCardManagementService} from '../../resources/payment-card-management.service';
import {Company} from "../../model/company.model";
import {User} from "../../model/user.model";

const PAYMENT_CARD_TEST_DATA: PaymentCard.Model = {
  id: '2364938',
  paymentCardProvider: '',
  paymentCardNumber: '1234-5678-1234-5678',
  paymentCardHolder: 'Ford Gmbh',
  expiryDate: '08/22',
  cvvCode: '666',
  isActive: true
};

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  private DIALOG_WIDTH = '400px';
  public paymentCardTest = PAYMENT_CARD_TEST_DATA;

  @Input() user: User | Company.Model;
  userPaymentCards: PaymentCard.Model[];

  constructor(
    private dialog: MatDialog,
    private paymentCardService: PaymentCardManagementService
  ) {
  }

  ngOnInit(): void {
    this.paymentCardService.findAllUserPaymentCards(this.user.id)
      .subscribe(resData => {
        console.log(resData);
        this.userPaymentCards = resData;
      }, error => {
        console.log(error);
      });
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
