import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {map, mergeMap} from 'rxjs/operators';
import {Company} from '../../../model/company.model';
import {CompanyManagementService} from '../../../resources/company-management.service';
import {UserManagementService} from '../../../resources/user-management.service';
import {Roles} from '../../../model/roles.model';
import {Observable} from 'rxjs';
import {FormAction} from '../../../model/form-action.model';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  isDisabled = true;
  company: Company.Model;
  formAction: FormAction.EDIT;

  constructor(
    private companyManagementService: CompanyManagementService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userManagementService: UserManagementService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.findCompanyId()
      .pipe(
        mergeMap(id => this.companyManagementService.findById(id)),
        map(model => {
          return model;
        })
      ).subscribe(model => {
        this.company = model;
      }, error => {
        this.messageService.showMessage('Unexpected error has occurred!');
        console.log(error);
    });
  }

  findCompanyId(): Observable<string> {
    return this.userManagementService.isUserHasRole(Roles.CARLY_COMPANY)
      .pipe(
        mergeMap(hasRole => {
          if (hasRole) {
            return this.userManagementService.getUserContext()
              .pipe(map(data => data.id));
          }
          return this.activatedRoute.parent.params.pipe(map(params => params.id));
        })
      );
  }
}
