import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-factory-match-request-dialog',
  templateUrl: './factory-match-dialog.component.html',
  styleUrls: ['./factory-match-dialog.component.scss']
})
export class FactoryMatchDialogComponent implements OnInit {

  companyName: string;
  companyId: string;
  cancelContract = false;
  factoryMatchId: string;

  constructor(
    private dialogRef: MatDialogRef<FactoryMatchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.companyName = this.data.companyName;
    this.companyId = this.data.companyId;
    this.cancelContract = this.data.cancelContract;
    this.factoryMatchId = this.data.matchId;
  }

  onConfirm() {
    if (this.factoryMatchId) {
      this.dialogRef.close(this.factoryMatchId);
    } else {
      this.dialogRef.close(this.companyId);
    }
  }

  onCancel() {
    this.dialogRef.close(null);
  }

}
