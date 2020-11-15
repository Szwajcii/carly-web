import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  @Output() submitEvent = new EventEmitter();

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) {
  }

  ngOnInit(): void {
  }

  onDecline() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.submitEvent.emit();
  }

}
