import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Company} from '../../../model/company.model';
import {CompanyManagementService} from '../../../resources/company-management.service';
import {MessageService} from '../../../services/message.service';
import {companyDetailsFormFields} from '../company-form-fields';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  @Input() submitEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() company: Company.Model;
  isDisabled = true;
  companyDetailsFormFields = companyDetailsFormFields;

  constructor(
    private companyManagementService: CompanyManagementService,
    private router: Router,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit($event) {
    const model: Company.Model = {
      ...$event.profileDetails.value
    };

    model.address = $event.addressDetails.value;
    this.updateCompany(model);
  }

  updateCompany(model: Company.Model) {
    model.id = this.company.id;
    const action = this.companyManagementService.update(model);

    action.subscribe(data => {
      this.messageService.showMessage('Company profile updated!');
      this.router.navigate(['/company', data.id]);
    }, error => {
      this.messageService.showMessage('Update profile company failed!');
      console.log(error);
    });
  }

}
