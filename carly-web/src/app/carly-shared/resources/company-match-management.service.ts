import {HttpClient} from '@angular/common/http';
import {CompanyFactoriesMatched} from '../model/company-factories-matched.model';
import {CompanyMatchingRequest} from '../model/company-matching-request.model';
import {Observable} from 'rxjs';
import {CompanyMatchResponse} from '../model/company-match-response.model';
import {CompanyResponse} from '../model/company-response.model';
import {Injectable} from '@angular/core';
import {MessageResponse} from '../model/message-response.model';
import {MatchResponse} from '../model/match-response.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyMatchManagementService {

  companyMatchApi = 'api/company-match';

  constructor(private http: HttpClient) {
  }

  /* Company -> Factory START */
  findAllAcceptedPendingMatching(companyId: string) {
    return this.http.get<CompanyFactoriesMatched>(`${this.companyMatchApi}/all-accepted-pending-matching/${companyId}`);
  }

  findFactoriesToMatch(contextCompanyId: string) {
    return this.http.get<CompanyResponse[]>(`${this.companyMatchApi}/potential-factories/${contextCompanyId}`);
  }

  requestMatchingWithFactory(matchRequest: CompanyMatchingRequest): Observable<CompanyMatchResponse> {
    return this.http.post<CompanyMatchResponse>(`${this.companyMatchApi}/request-matching-with-factory`, matchRequest);
  }

  cancelMatchingWithFactory(matchResponse: MatchResponse.Model) {
    return this.http.post<MessageResponse>(`${this.companyMatchApi}/cancel-matching-with-factory`, matchResponse);
  }
  /* Company -> Factory END */

  /* Factory -> Company START */
  findAllAcceptedContracts(factoryId: string) {
    return this.http.get<CompanyFactoriesMatched>(`${this.companyMatchApi}/all-accepted-matching/${factoryId}`);
  }

  findAllPendingContracts(factoryId: string) {
    return this.http.get<CompanyFactoriesMatched>(`${this.companyMatchApi}/all-pending-requests/${factoryId}`);
  }

  confirmMatchingWithCompany(matchResponse: MatchResponse.Model) {
    return this.http.post<MessageResponse>(`${this.companyMatchApi}/confirm-matching-with-company`, matchResponse);
  }

  cancelMatchingWithCompany(matchResponse: MatchResponse.Model) {
    return this.http.post<MessageResponse>(`${this.companyMatchApi}/cancel-matching-with-company`, matchResponse);
  }
  /* Factory -> Company END */
}
