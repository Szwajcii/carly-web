import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarModel} from '../model/car-model.model';

@Injectable({
  providedIn: 'root'
})
export class CarModelManagementService {

  carModelManagementApi = 'api/car-model';

  constructor(private http: HttpClient) {
  }

  findAllCarModels(): Observable<CarModel.Model[]> {
    return this.http.get<CarModel.Model[]>(`${this.carModelManagementApi}/all`);
  }

  findById(id: string): Observable<CarModel.Model> {
    return this.http.get<CarModel.Model>(`${this.carModelManagementApi}/${id}`);
  }

  create(model: CarModel.POST): Observable<CarModel.Model> {
    return this.http.post<CarModel.Model>(`${this.carModelManagementApi}`, model);
  }

  update(model: CarModel.PUT): Observable<CarModel.Model> {
    return this.http.put<CarModel.Model>(`${this.carModelManagementApi}`, model);
  }

  delete(id: string) {
    this.http.delete(`${this.carModelManagementApi}/${id}`);
  }

}
