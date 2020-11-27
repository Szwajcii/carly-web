import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-part-dialog',
  templateUrl: './delete-part-dialog.component.html',
  styleUrls: ['./delete-part-dialog.component.scss']
})
export class DeletePartDialogComponent implements OnInit {

  partName: string;

  constructor(
    public dialogRef: MatDialogRef<DeletePartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.partName = this.data.partName;
  }

  onSubmit() {
    const deletePart = true;
    this.dialogRef.close(deletePart);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
