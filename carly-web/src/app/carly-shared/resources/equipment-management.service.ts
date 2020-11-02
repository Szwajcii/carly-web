import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Equipment} from '../model/equipment.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentManagementService {

  equipmentManagementApi = 'api/equipment';

  constructor(private http: HttpClient) {
  }

  findAll(params: HttpParams): Observable<Equipment.PaginatedModel> {
    return this.http.get<Equipment.PaginatedModel>(`${this.equipmentManagementApi}`, {params});
  }

  findById(id: string): Observable<Equipment.Model> {
    return this.http.get<Equipment.Model>(`${this.equipmentManagementApi}/${id}`);
  }

  create(model: Equipment.POST): Observable<Equipment.Model> {
    return this.http.post<Equipment.Model>(`${this.equipmentManagementApi}`, model);
  }

  update(model: Equipment.PUT): Observable<Equipment.Model> {
    return this.http.put<Equipment.Model>(`${this.equipmentManagementApi}`, model);
  }

  delete(id: string) {
    this.http.delete(`${this.equipmentManagementApi}/delete/${id}`);
  }

}
