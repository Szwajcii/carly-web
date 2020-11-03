import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {map, mergeMap} from 'rxjs/operators';
import {Company} from '../../../model/company.model';
import {CompanyManagementService} from '../../../resources/company-management.service';
import {UserManagementService} from '../../../resources/user-management.service';
import {Roles} from '../../../model/roles.model';
import {of} from 'rxjs';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  isDisabled = true;
  company: Company.Model;

  constructor(
    private companyManagementService: CompanyManagementService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userManagementService: UserManagementService
  ) {
  }

  ngOnInit(): void {

  }

  findCompanyId() {
    // todo: Try getting id of company from context first

    return this.userManagementService.isUserHasRole(Roles.CARLY_COMPANY)
      .pipe(
        mergeMap(hasRole => {
          if (hasRole) {
            // todo: Check if company should subscribe!!! Maybe getUserContext should not return Observable?
            return of(this.userManagementService.getUserContext())
              .pipe(map(company => company.subscribe(data => data.id)));
          }
          return this.activatedRoute.parent.params.pipe(map(params => params.id));
        })
      );
  }
}
