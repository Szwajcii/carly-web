import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.scss']
})
export class RegistrationConfirmationComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() isSuccess: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
