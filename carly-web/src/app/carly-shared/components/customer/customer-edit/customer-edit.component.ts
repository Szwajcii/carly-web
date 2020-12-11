import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UserManagementService} from '../../../resources/user-management.service';
import {User} from '../../../model/user.model';
import {customerFormFields} from '../customer-form-fields';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  @Input() submitEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() customer: User;
  isDisabled = true;
  customerDetailsFormFields = customerFormFields;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userManagementService: UserManagementService,
    private router: Router,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
  }

}
