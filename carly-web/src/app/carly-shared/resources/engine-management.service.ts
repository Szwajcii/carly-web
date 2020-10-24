import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Engine} from '../model/engine.model';

@Injectable({
  providedIn: 'root'
})
export class EngineManagementService {

  constructor(private http: HttpClient) {
  }

  engineManagementApi = 'api/engines';

  findAll(params: HttpParams): Observable<Engine.PaginatedModel> {
    return this.http.get<Engine.PaginatedModel>(`${this.engineManagementApi}`, {params});
  }

  findById(id: string): Observable<Engine.Model> {
    return this.http.get<Engine.Model>(`${this.engineManagementApi}/${id}`);
  }

  create(model: Engine.POST): Observable<Engine.Model> {
    return this.http.post<Engine.Model>(`${this.engineManagementApi}`, model);
  }

  update(model: Engine.PUT): Observable<Engine.Model> {
    return this.http.put<Engine.Model>(`${this.engineManagementApi}`, model);
  }

}
