import {Component, OnInit} from '@angular/core';
import {filter, map, mergeMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Company} from '../../model/company.model';
import {UserManagementService} from '../../resources/user-management.service';
import {CompanyManagementService} from '../../resources/company-management.service';
import {MessageService} from '../../services/message.service';
import {Roles} from '../../model/roles.model';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {

  factory: Company.Model;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userManagementService: UserManagementService,
    private companyManagementService: CompanyManagementService,
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
      this.factory = model;
    }, error => {
      this.messageService.showMessage('Unexpected error has occurred!');
      console.log(error);
    });
  }

  findCompanyId(): Observable<string> {
    return this.userManagementService.isUserHasRole(Roles.CARLY_FACTORY)
      .pipe(
        mergeMap(hasRole => {
          if (hasRole) {
            return this.userManagementService.getUserContext()
              .pipe(
                filter(data => !!data),
                map(data => data.id)
              );
          }
          return this.activatedRoute.parent.params.pipe(map(params => params.id));
        })
      );
  }

}
