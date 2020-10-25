import {HttpParams} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {Observable} from 'rxjs';

import {Tires} from '../../model/tires.model';
import {Page} from '../../model/paginated.model';
import {AbstractDatasource} from '../../utils/table/abstract-datasource';
import {TiresManagementService} from '../../resources/tires-management.service';
import {MessageService} from '../../services/message.service';

export class TiresDatasourceService extends AbstractDatasource<Tires.Model> {

  constructor(
    private tiresService: TiresManagementService,
    private matPaginator: MatPaginator,
    messageService: MessageService
  ) {
    super(messageService);
    this.paginator = matPaginator;
  }

  protected loadPage(params: HttpParams): Observable<Page<Tires.Model>> {
    return this.tiresService.findAll(params);
  }

  connect(): Observable<Tires.Model[]> {
    return this.observePage();
  }

}
