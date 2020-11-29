import {AbstractDatasource} from '../../utils/table/abstract-datasource';
import {Brake} from '../../model/brakes.model';
import {MatPaginator} from '@angular/material/paginator';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../../model/paginated.model';
import {MessageService} from '../../services/message.service';
import {BrakesManagementService} from '../../resources/brakes-management.service';

export class BrakesDatasource extends AbstractDatasource<Brake.Model> {

  constructor(
    private brakesService: BrakesManagementService,
    private matPaginator: MatPaginator,
    messageService: MessageService
  ) {
    super(messageService);
    this.paginator = matPaginator;
  }

  protected loadPage(params: HttpParams): Observable<Page<Brake.Model>> {
    return this.brakesService.findAll(params);
  }

  connect(): Observable<Brake.Model[]> {
    return this.observePage();
  }

}
