import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Brand} from '../model/brand.model';
import {FactoryRequest} from '../model/factory-request.model';
import {FactoryDetailsResponse} from '../model/factory-details-response.model';

@Injectable({
  providedIn: 'root'
})
export class FactoryManagementService {

  factoryManagementApi = 'api/factory';

  constructor(private http: HttpClient) {
  }

  findAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.factoryManagementApi}/all-brands`);
  }

  getFactoryDetailsForCompany(factoryRequest: FactoryRequest) {
    return this.http.post<FactoryDetailsResponse>(`${this.factoryManagementApi}/get-factory-details`, factoryRequest);
  }

  getPartDetails(partId: string, params: HttpParams) {
    return this.http.get<any>(`${this.factoryManagementApi}/get-part-details/${partId}`, {params});
  }
}
