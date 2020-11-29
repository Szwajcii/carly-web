import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.scss']
})
export class RegistrationConfirmationComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() isSuccess: boolean;

  constructor(
    private dialogRef: MatDialogRef<RegistrationConfirmationComponent>
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dialogRef.close();
  }

}
