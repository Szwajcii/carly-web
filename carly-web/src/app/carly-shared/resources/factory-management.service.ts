import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {FactoryMatch} from '../model/factory-match.model';
import {CompanyMatchResponse} from '../model/company-match-response.model';
import {CompanyMatchingRequest} from '../model/company-matching-request.model';
import {Brand} from '../model/brand.model';
import {CompanyFactoryMatchRequest} from '../model/company-factory-match-request.model';
import {CompanyResponse} from '../model/company-response.model';
import {CompanyFactoriesMatched} from '../model/company-factories-matched.model';
import {FactoryRequest} from '../model/factory-request.model';
import {FactoryDetailsResponse} from '../model/factory-details-response.model';

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

  findFactoriesToMatch(contextCompanyId: string) {
    return this.http.get<CompanyResponse[]>(`${this.factoryMatchApi}/potential-factories/${contextCompanyId}`);
  }

  findAllMatchedFactories(companyId: string) {
    return this.http.get<CompanyFactoriesMatched>(`${this.factoryManagementApi}/all-matched-factories/${companyId}`);
  }

  getFactoryDetails(factoryRequest: FactoryRequest) {
    return this.http.post<FactoryDetailsResponse>(`${this.factoryManagementApi}/get-factory-details`, factoryRequest);
  }

  getPartDetails(partId: string, params: HttpParams) {
    return this.http.get<any>(`${this.factoryManagementApi}/get-part-details/${partId}`, {params});
  }

  // todo: Pass company id to BE
  findFactoryMatching(): Observable<FactoryMatch[]> {
    return this.http.get<FactoryMatch[]>(`${this.factoryMatchApi}`);
  }

  requestMatching(matchRequest: CompanyMatchingRequest): Observable<CompanyMatchResponse> {
    console.log('Request matching for id: ', matchRequest.factoryId);
    return this.http.post<CompanyMatchResponse>(`${this.factoryMatchApi}/request`, matchRequest);
  }

  responseForCompanyMatching(matchResponse: CompanyFactoryMatchRequest) {
    return this.http.post<CompanyMatchResponse>(`${this.factoryMatchApi}/response`, matchResponse);
  }

  cancelMatching(matchRequestId: string) {
    return this.http.get<CompanyMatchResponse>(`${this.factoryManagementApi}/declined/${matchRequestId}`);
  }
}
