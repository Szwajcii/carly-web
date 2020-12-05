import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Company} from '../../../model/company.model';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Roles} from '../../../model/roles.model';
import {CompanyManagementService} from '../../../resources/company-management.service';
import {UserManagementService} from '../../../resources/user-management.service';
import {MessageService} from '../../../services/message.service';
import {factoryDetailsFormFields} from '../factory-form-fields';

@Component({
  selector: 'app-factory-edit',
  templateUrl: './factory-edit.component.html',
  styleUrls: ['./factory-edit.component.scss']
})
export class FactoryEditComponent implements OnInit {

  @Input() submitEvent: EventEmitter<any> = new EventEmitter<any>();
  isDisabled = true;
  company: Company.Model;
  factoryDetailsFormFields = factoryDetailsFormFields;

  // todo: Replace all company occurrences with factory
  constructor(
    private companyManagementService: CompanyManagementService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userManagementService: UserManagementService,
    private messageService: MessageService
  ) { }

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
