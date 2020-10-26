import {HttpParams} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {Observable} from 'rxjs';

import {Page} from '../../model/paginated.model';
import {Painting} from '../../model/painting.model';
import {AbstractDatasource} from '../../utils/table/abstract-datasource';
import {PaintingManagementService} from '../../resources/painting-management.service';
import {MessageService} from '../../services/message.service';

export class PaintingDatasource extends AbstractDatasource<Painting.Model> {

  constructor(
    private paintingService: PaintingManagementService,
    private matPaginator: MatPaginator,
    messageService: MessageService
  ) {
    super(messageService);
    this.paginator = matPaginator;
  }

  protected loadPage(params: HttpParams): Observable<Page<Painting.Model>> {
    return this.paintingService.findAll(params);
  }

  connect(): Observable<Painting.Model[]> {
    return this.observePage();
  }

}
