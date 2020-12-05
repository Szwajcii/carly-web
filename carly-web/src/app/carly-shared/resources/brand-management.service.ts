import {Injectable} from '@angular/core';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {UserManagementService} from './user-management.service';
import {CompanyManagementService} from './company-management.service';
import {Brand} from '../model/brand.model';
import {Roles} from '../model/roles.model';
import {MessageService} from '../services/message.service';
import {FactoryManagementService} from './factory-management.service';

@Injectable({
  providedIn: 'root'
})
export class BrandManagementService {

  constructor(
    private messageService: MessageService,
    private userManagementService: UserManagementService,
    private companyManagementService: CompanyManagementService,
    private factoryManagementService: FactoryManagementService
  ) {
  }

  findBrands() {
    let allBrands = [];
    this.factoryManagementService.findAllBrands().subscribe(resData => {
      allBrands = resData;
    }, error => {
      console.log(error);
    });
    return allBrands;
  }

  findBrandFromContext(action: Observable<string>): Brand {
    const brand = new Brand();
    action.pipe(
      mergeMap(id => this.companyManagementService.findById(id)),
      map(model => {
        return model;
      })
    ).subscribe(data => {
      brand.carlyFactoryId = data.id;
      brand.name = data.companyName;
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
        })
      );
  }

  findFactoryContextId(): Observable<string> {
    return this.userManagementService.getUserContext()
      .pipe(
        filter(data => !!data),
        map(data => data.id)
      );
  }

  isFactoryContext(): boolean {
    let hasRole = false;
    this.userManagementService.isUserHasRole(Roles.CARLY_FACTORY)
      .subscribe(data => {
        hasRole = data;
      }, error => {
        console.log(error);
      });
    return hasRole;
  }

}
