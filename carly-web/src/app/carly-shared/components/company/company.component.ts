import {Component, OnInit} from '@angular/core';
import {Roles} from '../../model/roles.model';
import {Observable} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {UserManagementService} from '../../resources/user-management.service';
import {MessageService} from '../../services/message.service';
import {Company} from '../../model/company.model';
import {CompanyManagementService} from '../../resources/company-management.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  company: Company.Model;

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
