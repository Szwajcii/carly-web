import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Car} from '../model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsManagementService {

  carsManagementApi = 'api/cars';

  constructor(private http: HttpClient) {
  }

  findAll(params: HttpParams): Observable<Car.PaginatedModel> {
    return this.http.get<Car.PaginatedModel>(`${this.carsManagementApi}`, {params});
  }

  findById(id: string): Observable<Car.Model> {
    return this.http.get<Car.Model>(`${this.carsManagementApi}/${id}`);
  }

  create(model: Car.POST): Observable<Car.Model> {
    return this.http.post<Car.Model>(`${this.carsManagementApi}`, model);
  }

  update(model: Car.PUT): Observable<Car.Model> {
    return this.http.put<Car.Model>(`${this.carsManagementApi}`, model);
  }

  delete(id: string) {
    this.http.delete(`${this.carsManagementApi}/delete/${id}`);
  }

}
