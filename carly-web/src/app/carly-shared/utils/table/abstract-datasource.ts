import {DataSource} from '@angular/cdk/collections';
import {HttpParams} from '@angular/common/http';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {merge, Observable, Subject} from 'rxjs';
import {MessageService} from '../../services/message.service';
import {Page} from '../../model/paginated.model';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

/*
* Abstract datasource with generic type of displayed data
* */
export abstract class AbstractDatasource<T> extends DataSource<T> {

  protected static PAGE_PARAM = 'page';
  protected static SIZE_PARAM = 'size';
  protected params = new HttpParams();
  private trigger = new Subject();
  max = 0;
  loading = true;
  paginator: MatPaginator;
  dataToDisplay = [];

  protected constructor(
    private messageService: MessageService
  ) {
    super();
  }

  /*
  * Refresh data in table by calling loadPage
  *
  * @returns data to display in table
  * */
  protected observePage() {
    return merge(this.trigger, this.paginator.page).pipe(
      startWith(null),
      switchMap((paginator: PageEvent) => {
        this.loading = true;
        let params = this.params;
        const pageIndex = String(paginator ? paginator.pageIndex : this.paginator ? this.paginator.pageIndex : 0);
        const pageSize = String(paginator ? paginator.pageSize : this.paginator ? this.paginator.pageSize : 3);
        params = params.set(AbstractDatasource.PAGE_PARAM, pageIndex);
        params = params.set(AbstractDatasource.SIZE_PARAM, pageSize);
        return this.loadPage(params);
      }),
      map(result => {
        this.loading = false;
        if (result == null || result.totalElements === 0) {
          return [];
        }
        this.dataToDisplay = result.content;
        this.max = result.totalElements;
        return result.content;
      }),
      catchError(error => {
        this.loading = false;
        this.max = 0;
        this.messageService.showMessage('Connection problem');
        throw error;
      })
    );
  }

  protected abstract loadPage(params: HttpParams): Observable<Page<T>>;


  reloadTable() {
    this.reload(this.params);
  }

  reload(params: HttpParams, resetPage = true) {
    if (resetPage) {
      this.paginator.pageIndex = 0;
    }
    this.params = params;
    this.trigger.next();
  }

  disconnect() {
  }

}
