import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderManagementService {

  orderManagementApi = 'api/order';

  constructor(private http: HttpClient) {
  }

  deleteOrder(orderId: string) {
    console.log(orderId);
  }

}
