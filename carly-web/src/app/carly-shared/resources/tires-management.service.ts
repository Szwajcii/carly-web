import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tires} from '../model/tires.model';

@Injectable({
  providedIn: 'root'
})
export class TiresManagementService {

  tiresManagementApi: 'api/tires';

  constructor(private http: HttpClient) {
  }

  findAll(params: HttpParams): Observable<Tires.PaginatedModel> {
    return this.http.get<Tires.PaginatedModel>(`${this.tiresManagementApi}`, {params});
  }

  findById(id: string): Observable<Tires.Model> {
    return this.http.get<Tires.Model>(`${this.tiresManagementApi}/${id}`);
  }

  create(model: Tires.POST): Observable<Tires.Model> {
    return this.http.post<Tires.Model>(`${this.tiresManagementApi}`, model);
  }

  update(model: Tires.PUT): Observable<Tires.Model> {
    return this.http.put<Tires.Model>(`${this.tiresManagementApi}`, model);
  }

  delete(id: string) {
    this.http.delete(`${this.tiresManagementApi}/delete/${id}`);
  }

}
