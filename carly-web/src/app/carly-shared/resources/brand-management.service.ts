import {Injectable} from '@angular/core';
import {map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {UserManagementService} from './user-management.service';
import {CompanyManagementService} from './company-management.service';
import {Brand} from '../model/brand.model';
import {Roles} from '../model/roles.model';
import {MessageService} from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class BrandManagementService {

  constructor(
    private messageService: MessageService,
    private userManagementService: UserManagementService,
    private companyManagementService: CompanyManagementService,
  ) {
  }

  findBrands() {

  }

  findBrandFromContext(action: Observable<string>) {
    let brand = null;
    action.pipe(
      mergeMap(id => this.companyManagementService.findById(id)),
      map(model => {
        return model;
      })
    ).subscribe(data => {
      brand = new Brand(data.id, data.companyName);
      console.log(400, brand);
    }, error => {
      this.messageService.showMessage('Unexpected error has occurred!');
      console.log(error);
    });
    return brand;
  }

  findCompanyContextId(): Observable<string> {
    return this.userManagementService.isUserHasRole(Roles.CARLY_FACTORY)
      .pipe(
        mergeMap(hasRole => {
          if (hasRole) {
            return this.userManagementService.getUserContext()
              .pipe(map(data => data.id));
          }
          return null;
        })
      );
  }

}
