import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PaymentCardAddComponent} from './payment-card-add/payment-card-add.component';
import {PaymentCardEditComponent} from './payment-card-edit/payment-card-edit.component';
import {PaymentCard} from '../../model/payment-card.model';
import {PaymentCardManagementService} from '../../resources/payment-card-management.service';
import {Company} from '../../model/company.model';
import {User} from '../../model/user.model';
import {MessageService} from '../../services/message.service';


@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  private DIALOG_WIDTH = '400px';

  @Input() user: User | Company.Model;
  userPaymentCards: PaymentCard.Model[];
  userName: string;

  constructor(
    private dialog: MatDialog,
    private paymentCardService: PaymentCardManagementService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.fetchPaymentCardData();
  }

  fetchPaymentCardData() {
    this.paymentCardService.findAllUserPaymentCards(this.user.id)
      .subscribe(resData => {
        console.log(resData);
        this.userPaymentCards = resData;
      }, error => {
        console.log(error);
      });
  }

  viewPaymentCardDetails(cardIndex: number, $event: any) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dialog.open(PaymentCardEditComponent, {
      data: {
        card: this.userPaymentCards[cardIndex]
      },
      width: this.DIALOG_WIDTH
    });
  }

  addNewPaymentCard() {
    const dialogRef = this.dialog.open(PaymentCardAddComponent, {
      width: this.DIALOG_WIDTH,
      data: {
        paymentCardHolder: this.userName
      }
    });

    dialogRef.afterClosed().subscribe(response => {
        this.fetchPaymentCardData();
      }, error => {
        console.log(error);
      }
    );
  }

  activateCard(card: PaymentCard.Model) {
    if (!card.cardActive) {
      this.paymentCardService.activateCard(card.id).subscribe(resData => {
        this.messageService.showMessage('Card activated!');
        this.fetchPaymentCardData();
      }, error => {
        console.log(error);
        this.messageService.showMessage('Unexpected error occurred!');
      });
    }
  }

}
