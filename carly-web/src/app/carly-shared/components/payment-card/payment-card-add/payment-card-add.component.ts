import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-payment-card-add',
  templateUrl: './payment-card-add.component.html',
  styleUrls: ['./payment-card-add.component.scss']
})
export class PaymentCardAddComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<PaymentCardAddComponent>
  ) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
