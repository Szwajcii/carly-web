import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormGroupHelperService} from '../../services/form-group-helper.service';
import {FormGroupHelper} from '../../model/form-group-helper.model';
import {PaymentCardManagementService} from '../../resources/payment-card-management.service';
import {paymentCardFormFields} from '../payment-card/payment-card-form/payment-card-form-fields';
import {MatDialog} from '@angular/material/dialog';
import {VerifyPaymentCardDialogComponent} from './payment-method-details/verify-payment-card-dialog/verify-payment-card-dialog.component';
import {PaymentCard} from '../../model/payment-card.model';
import {MessageService} from '../../services/message.service';
import {User} from '../../model/user.model';
import {Company} from '../../model/company.model';
import {UserManagementService} from '../../resources/user-management.service';

@Component({
  selector: 'app-payment-process',
  templateUrl: './payment-process.component.html',
  styleUrls: ['./payment-process.component.scss']
})
export class PaymentProcessComponent implements OnInit {

  @ViewChild('paymentCard') paymentCard: any;
  @ViewChild('newPaymentCard') newPaymentCard: any;
  @ViewChild('paymentCards') paymentCards: any;

  gridColumns = 4;
  generalForm: FormGroup;

  paymentCardDetailsForm: FormGroup;
  paymentCardDetailsFormControls: FormGroupHelper.ModelControl[];
  paymentCardsDisabled = false;
  user: User | Company.Model;
  userId: string;
  userPaymentCards: PaymentCard.Model[];

  constructor(
    private formBuilder: FormBuilder,
    private formGroupService: FormGroupHelperService,
    private paymentCardManagementService: PaymentCardManagementService,
    private userManagementService: UserManagementService,
    private dialog: MatDialog,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.paymentCardDetailsFormControls = this.formGroupService.addControlToModel(paymentCardFormFields);

    this.paymentCardDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.paymentCardDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      paymentCardDetailsForm: this.paymentCardDetailsForm
    });

    this.generalForm.disable();

    this.userManagementService.findUserContextId().subscribe(id => {
      this.userId = id;
      this.fetchPaymentCardData(this.userId);
    });
  }

  fetchPaymentCardData(userId: string) {
    this.paymentCardManagementService.findAllUserPaymentCards(userId)
      .subscribe(resData => {
        console.log(resData);
        this.userPaymentCards = resData;
      }, error => {
        console.log(error);
      });
  }

  choosePaymentCard() {
    this.newPaymentCard.checked = false;
    this.paymentCardsDisabled = false;
    this.generalForm.disable();
  }

  addNewPaymentCard() {
    this.paymentCard.checked = false;
    this.paymentCardsDisabled = true;
    this.generalForm.enable();
  }

  openVerifyPaymentCardDialog() {
    if (!this.paymentCardsDisabled) {
      const dialog = this.dialog.open(VerifyPaymentCardDialogComponent);
      dialog.afterClosed().subscribe(cvvCode => {
        if (cvvCode) {
          console.log(cvvCode);
          const paymentCardId = '';
          this.verifyPaymentCard(paymentCardId, cvvCode);
        }
      });
    }
  }

  verifyPaymentCard(paymentCardId: string, code: string) {
    const verifyModel: PaymentCard.VerifyModel = {
      id: paymentCardId,
      cvvCode: code
    };

    this.paymentCardManagementService.verifyPaymentCard(verifyModel)
      .subscribe(resData => {
        console.log(resData);
      }, error => {
        console.log(error);
        this.messageService.showMessage('Payment card verification has failed!');
      });
  }

  onSubmit() {

  }
}
