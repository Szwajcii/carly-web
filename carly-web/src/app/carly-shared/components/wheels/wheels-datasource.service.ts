import {MatPaginator} from '@angular/material/paginator';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Wheels} from '../../model/wheels.model';
import {Page} from '../../model/paginated.model';
import {AbstractDatasource} from '../../utils/table/abstract-datasource';
import {WheelsManagementService} from '../../resources/wheels-management.service';
import {MessageService} from '../../services/message.service';

export class WheelsDatasourceService extends AbstractDatasource<Wheels.Model> {

  constructor(
    private wheelsService: WheelsManagementService,
    private matPaginator: MatPaginator,
    messageService: MessageService
  ) {
    super(messageService);
    this.paginator = matPaginator;
  }

  protected loadPage(params: HttpParams): Observable<Page<Wheels.Model>> {
    return this.wheelsService.findAll(params);
  }

  connect(): Observable<Wheels.Model[]> {
    return this.observePage();
  }

}
