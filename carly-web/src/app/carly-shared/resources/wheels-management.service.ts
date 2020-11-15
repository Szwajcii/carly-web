import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wheels} from '../model/wheels.model';

@Injectable({
  providedIn: 'root'
})
export class WheelsManagementService {

  constructor(private http: HttpClient) {
  }

  wheelsManagementApi = 'api/wheels';

  findAll(params: HttpParams): Observable<Wheels.PaginatedModel> {
    return this.http.get<Wheels.PaginatedModel>(`${this.wheelsManagementApi}`, {params});
  }

  findAllWheels(): Observable<Wheels.Model[]> {
    return this.http.get<Wheels.Model[]>(`${this.wheelsManagementApi}/all`);
  }

  findById(id: string): Observable<Wheels.Model> {
    return this.http.get<Wheels.Model>(`${this.wheelsManagementApi}/${id}`);
  }

  create(model: Wheels.POST): Observable<Wheels.Model> {
    return this.http.post<Wheels.Model>(`${this.wheelsManagementApi}`, model);
  }

  update(model: Wheels.PUT): Observable<Wheels.Model> {
    return this.http.put<Wheels.Model>(`${this.wheelsManagementApi}`, model);
  }

  delete(id: string) {
    this.http.delete(`${this.wheelsManagementApi}/delete/${id}`);
  }

}
