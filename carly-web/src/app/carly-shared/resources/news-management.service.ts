import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsManagementService {

  newsManagementApi = 'api/news';

  constructor(private http: HttpClient) {
  }

  findLatestNews(): Observable<News.Model> {
    return this.http.get<News.Model>(`${this.newsManagementApi}/latest`);
  }

}
