import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Brake} from '../model/brakes.model';

@Injectable({
  providedIn: 'root'
})
export class BrakesManagementService {

  constructor(protected http: HttpClient) {
  }

  brakesManagementApi = 'api/brakes';

  findAll(params: HttpParams): Observable<Brake.PaginatedModel> {
    return this.http.get<Brake.PaginatedModel>(`${this.brakesManagementApi}`, {params});
  }

  findAllBrakes(): Observable<Brake.Model[]> {
    return this.http.get<Brake.Model[]>(`${this.brakesManagementApi}/all`);
  }

  findById(id: string): Observable<Brake.Model> {
    return this.http.get<Brake.Model>(`${this.brakesManagementApi}/${id}`);
  }

  create(model: Brake.POST): Observable<Brake.Model> {
    return this.http.post<Brake.Model>(`${this.brakesManagementApi}`, model);
  }

  update(model: Brake.PUT): Observable<Brake.Model> {
    return this.http.put<Brake.Model>(`${this.brakesManagementApi}`, model);
  }

  delete(id: string) {
    this.http.delete(`${this.brakesManagementApi}/delete/${id}`);
  }

}
