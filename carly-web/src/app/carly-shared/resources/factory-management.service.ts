import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FactoryMatch} from '../model/factory-match.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactoryManagementService {

  factoryManagementApi = 'api/factory';

  constructor(private http: HttpClient) {
  }

  // todo: Pass company id to BE
  findFactoryMatching(): Observable<FactoryMatch[]> {
    return this.http.get<FactoryMatch[]>(`${this.factoryManagementApi}`);
  }

  requestMatching(factoryId: string) {
    console.log('Request matching for id: ', factoryId);
  }

  cancelMatching(factoryId: string) {
    console.log(factoryId);
  }
}
