import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-payment-card-add',
  templateUrl: './payment-card-add.component.html',
  styleUrls: ['./payment-card-add.component.scss']
})
export class PaymentCardAddComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PaymentCardAddComponent>
  ) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
