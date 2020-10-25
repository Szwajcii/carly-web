import {HttpParams} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {Observable} from 'rxjs';

import {Engine} from '../../model/engine.model';
import {Page} from '../../model/paginated.model';
import {MessageService} from '../../services/message.service';
import {AbstractDatasource} from '../../utils/table/abstract-datasource';
import {EngineManagementService} from '../../resources/engine-management.service';

export class EnginesDatasource extends AbstractDatasource<Engine.Model> {

  constructor(
    private engineService: EngineManagementService,
    private matPaginator: MatPaginator,
    messageService: MessageService
  ) {
    super(messageService);
    this.paginator = matPaginator;
  }

  protected loadPage(params: HttpParams): Observable<Page<Engine.Model>> {
    return this.engineService.findAll(params);
  }

  connect(): Observable<Engine.Model[]> {
    return this.observePage();
  }

}
