import {MatPaginator} from '@angular/material/paginator';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {User} from '../../model/user.model';
import {Page} from '../../model/paginated.model';
import {AbstractDatasource} from '../../utils/table/abstract-datasource';
import {UserManagementService} from '../../resources/user-management.service';
import {MessageService} from '../../services/message.service';

export class UserDatasource extends AbstractDatasource<User> {

  constructor(
    private userManagementService: UserManagementService,
    private matPaginator: MatPaginator,
    messageService: MessageService
  ) {
    super(messageService);
    this.paginator = matPaginator;
  }

  protected loadPage(params: HttpParams): Observable<Page<User>> {
    return undefined;
  }

  connect(): Observable<User[]> {
    return this.observePage();
  }


}
