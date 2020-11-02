import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

  findAll(params: HttpParams): Observable<News.PaginatedModel> {
    return this.http.get<News.PaginatedModel>(`${this.newsManagementApi}`, {params});
  }

  findById(id: string): Observable<News.Model> {
    return this.http.get<News.Model>(`${this.newsManagementApi}/${id}`);
  }

  create(model: News.POST): Observable<News.Model> {
    return this.http.post<News.Model>(`${this.newsManagementApi}`, model);
  }

  update(model: News.PUT): Observable<News.Model> {
    return this.http.put<News.Model>(`${this.newsManagementApi}`, model);
  }

  delete(id: string) {
    this.http.delete(`${this.newsManagementApi}/delete/${id}`);
  }

}
