import {HttpParams} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {Observable} from 'rxjs';

import {Company} from '../../model/company.model';
import {Page} from '../../model/paginated.model';
import {AbstractDatasource} from '../../utils/table/abstract-datasource';
import {CompanyManagementService} from '../../resources/company-management.service';
import {MessageService} from '../../services/message.service';

export class CompanyDatasource extends AbstractDatasource<Company.Model> {

  constructor(
    private companyManagementService: CompanyManagementService,
    private matPaginator: MatPaginator,
    messageService: MessageService
  ) {
    super(messageService);
    this.paginator = matPaginator;
  }

  protected loadPage(params: HttpParams): Observable<Page<Company.Model>> {
    return this.companyManagementService.findAll(params);
  }

  connect(): Observable<Company.Model[]> {
    return this.observePage();
  }

}
