import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Windows} from '../model/windows.model';

@Injectable({
  providedIn: 'root'
})
export class WindowsManagementService {

  windowsManagementApi = 'api/windows';

  constructor(private http: HttpClient) {
  }


  findAll(params: HttpParams): Observable<Windows.PaginatedModel> {
    return this.http.get<Windows.PaginatedModel>(`${this.windowsManagementApi}`, {params});
  }

  findAllWheels(): Observable<Windows.Model[]> {
    return this.http.get<Windows.Model[]>(`${this.windowsManagementApi}/all`);
  }

  findById(id: string): Observable<Windows.Model> {
    return this.http.get<Windows.Model>(`${this.windowsManagementApi}/${id}`);
  }

  create(model: Windows.POST): Observable<Windows.Model> {
    return this.http.post<Windows.Model>(`${this.windowsManagementApi}`, model);
  }

  update(model: Windows.PUT): Observable<Windows.Model> {
    return this.http.put<Windows.Model>(`${this.windowsManagementApi}`, model);
  }

  delete(id: string) {
    this.http.delete(`${this.windowsManagementApi}/delete/${id}`);
  }

}
