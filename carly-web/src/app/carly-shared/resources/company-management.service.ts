import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../model/company.model';
import {Brand} from '../model/brand.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyManagementService {

  companyManagementApi = 'api/company';

  constructor(private http: HttpClient) {
  }

  findAll(params: HttpParams): Observable<Company.PaginatedModel> {
    return this.http.get<Company.PaginatedModel>(`${this.companyManagementApi}`, {params});
  }

  findById(id: string): Observable<Company.Model> {
    return this.http.get<Company.Model>(`${this.companyManagementApi}/${id}`);
  }

  findBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.companyManagementApi}/brands`);
  }

  create(model: Company.POST): Observable<Company.Model> {
    return this.http.post<Company.Model>(`${this.companyManagementApi}`, model);
  }

  update(model: Company.PUT): Observable<Company.Model> {
    return this.http.put<Company.Model>(`${this.companyManagementApi}`, model);
  }

  delete(id: string) {
    this.http.delete(`${this.companyManagementApi}/delete/${id}`);
  }

}
