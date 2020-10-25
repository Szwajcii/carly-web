import {MatPaginator} from '@angular/material/paginator';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Windows} from '../../model/windows.model';
import {Page} from '../../model/paginated.model';
import {AbstractDatasource} from '../../utils/table/abstract-datasource';
import {WindowsManagementService} from '../../resources/windows-management.service';
import {MessageService} from '../../services/message.service';

export class WindowsDatasourceService extends AbstractDatasource<Windows.Model> {

  constructor(
    private windowsService: WindowsManagementService,
    private matPaginator: MatPaginator,
    messageService: MessageService
  ) {
    super(messageService);
    this.paginator = matPaginator;
  }

  protected loadPage(params: HttpParams): Observable<Page<Windows.Model>> {
    return this.windowsService.findAll(params);
  }

  connect(): Observable<Windows.Model[]> {
    return this.observePage();
  }
}
