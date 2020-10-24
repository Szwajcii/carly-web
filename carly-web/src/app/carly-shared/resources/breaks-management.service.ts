import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Breaks} from '../model/breaks.model';

@Injectable({
  providedIn: 'root'
})
export class BreaksManagementService {

  constructor(protected http: HttpClient) {
  }

  // breaksManagementApi: string = `${BASE_API_URL}`;
  breaksManagementApi = 'api/breaks';

  // BREAKS
  findAll(params: HttpParams): Observable<Breaks.PaginatedModel> {
    return this.http.get<Breaks.PaginatedModel>(`${this.breaksManagementApi}`, {params});
  }

  findById(id: string): Observable<Breaks.Model> {
    return this.http.get<Breaks.Model>(`${this.breaksManagementApi}/${id}`);
  }

}
