import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {FactoryMatch} from '../model/factory-match.model';
import {CompanyMatchResponse} from '../model/company-match-response.model';
import {CompanyMatchingRequest} from '../model/company-matching-request.model';
import {Brand} from '../model/brand.model';

@Injectable({
  providedIn: 'root'
})
export class FactoryManagementService {

  factoryMatchApi = 'api/company-match';
  factoryManagementApi = 'api/factory';

  constructor(private http: HttpClient) {
  }

  findAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.factoryManagementApi}/all-brands`);
  }

  // todo: Pass company id to BE
  findFactoryMatching(): Observable<FactoryMatch[]> {
    return this.http.get<FactoryMatch[]>(`${this.factoryMatchApi}`);
  }

  requestMatching(matchRequest: CompanyMatchingRequest): Observable<CompanyMatchResponse> {
    console.log('Request matching for id: ', matchRequest.factoryId);
    return this.http.post<CompanyMatchResponse>(`${this.factoryMatchApi}/request`, matchRequest);
  }

  cancelMatching(matchRequest: CompanyMatchingRequest) {
    console.log(matchRequest.factoryId);
  }
}
