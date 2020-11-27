import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-factory-match-request-dialog',
  templateUrl: './match-request-dialog.component.html',
  styleUrls: ['./match-request-dialog.component.scss']
})
export class MatchRequestDialogComponent implements OnInit {

  companyName: string;
  companyId: string;

  constructor(
    private dialogRef: MatDialogRef<MatchRequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.companyName = this.data.companyName;
    this.companyId = this.data.companyId;
  }

  onConfirm() {
    this.dialogRef.close(this.companyId);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
