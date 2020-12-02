import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {FactoryMatch} from '../model/factory-match.model';
import {CompanyMatchResponse} from '../model/company-match-response.model';
import {CompanyMatchingRequest} from '../model/company-matching-request.model';

@Injectable({
  providedIn: 'root'
})
export class FactoryManagementService {

  factoryManagementApi = 'api/company-match';

  constructor(private http: HttpClient) {
  }

  // todo: Pass company id to BE
  findFactoryMatching(): Observable<FactoryMatch[]> {
    return this.http.get<FactoryMatch[]>(`${this.factoryManagementApi}`);
  }

  requestMatching(matchRequest: CompanyMatchingRequest): Observable<CompanyMatchResponse> {
    console.log('Request matching for id: ', matchRequest.factoryId);
    return this.http.post<CompanyMatchResponse>(`${this.factoryManagementApi}/request`, matchRequest);
  }

  cancelMatching(matchRequest: CompanyMatchingRequest) {
    console.log(matchRequest.factoryId);
  }
}
