import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {UserManagementService} from '../../../resources/user-management.service';
import {User} from '../../../model/user.model';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  @Input() customer: User;
  isDisabled = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userManagementService: UserManagementService
  ) {
  }

  ngOnInit(): void {
  }

}
