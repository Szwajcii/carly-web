import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  isCompanyUser = false;
  loading = false;
  isRegistration = true;
  isSuccess = false;
  message: string;
  title: string;

  constructor() {
  }

  ngOnInit(): void {
  }


  toggleRegistrationMode() {
    this.isCompanyUser = !this.isCompanyUser;
  }

}
