import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationManagementService {

  notificationManagementApi = 'api/notifications';

  constructor(private http: HttpClient) {
  }


}
