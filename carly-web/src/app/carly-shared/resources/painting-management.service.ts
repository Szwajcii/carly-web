import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Painting} from '../model/painting.model';

@Injectable({
  providedIn: 'root'
})
export class PaintingManagementService {

  paintingManagementApi: 'api/painting';

  constructor(private http: HttpClient) {
  }

  findAll(params: HttpParams): Observable<Painting.PaginatedModel> {
    return this.http.get<Painting.PaginatedModel>(`${this.paintingManagementApi}`, {params});
  }

  findById(id: string): Observable<Painting.Model> {
    return this.http.get<Painting.Model>(`${this.paintingManagementApi}/${id}`);
  }

  create(model: Painting.POST): Observable<Painting.Model> {
    return this.http.post<Painting.Model>(`${this.paintingManagementApi}`, model);
  }

  update(model: Painting.PUT): Observable<Painting.Model> {
    return this.http.put<Painting.Model>(`${this.paintingManagementApi}`, model);
  }

}
