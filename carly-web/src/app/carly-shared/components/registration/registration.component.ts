import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Input() isRegistrationSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();
  isCompanyUser = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  toggleRegistrationMode() {
    this.isCompanyUser = !this.isCompanyUser;
  }

}
