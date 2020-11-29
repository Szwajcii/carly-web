import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-part-dialog',
  templateUrl: './add-part-dialog.component.html',
  styleUrls: ['./add-part-dialog.component.scss']
})
export class AddPartDialogComponent implements OnInit {

  partName: string;
  partPrice: number;
  totalPrice: number;
  amount: number;

  constructor(
    public dialogRef: MatDialogRef<AddPartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.partName = this.data.partName;
    this.partPrice = this.data.partPrice;
    this.totalPrice = this.partPrice;
    this.amount = 1;
  }

  addAmount() {
    this.amount += 1;
    this.changeTotalAmount();
  }

  removeAmount() {
    if (this.amount > 1) {
      this.amount -= 1;
      this.changeTotalAmount();
    }
  }

  changeTotalAmount() {
    this.totalPrice = this.partPrice * this.amount;
  }

  isValidAmount($event: any) {
    console.log($event.target.value);
  }

  onSubmit() {
    this.dialogRef.close();
  }

  onCancel() {
    this.dialogRef.close();
  }

}
