import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CartPartUpdate} from '../model/cart-part-update.model';
import {MessageResponse} from '../model/message-response.model';
import {CartOrder} from '../model/cart-order.model';

@Injectable(({
  providedIn: 'root'
}))
export class CartManagementService {

  cartManagementApi = 'api/cart';

  constructor(private http: HttpClient) {
  }

  findCartItems(consumerId: string) {
    return this.http.get<CartOrder>(`${this.cartManagementApi}/get-cart-factories/${consumerId}`);
  }

  updateCart(cartUpdate: CartPartUpdate) {
    return this.http.post<CartPartUpdate>(`${this.cartManagementApi}/update-cart`, cartUpdate);
  }

  removeFromCart(cartUpdate: CartPartUpdate) {
    return this.http.post<MessageResponse>(`${this.cartManagementApi}/remove-from-cart`, cartUpdate);
  }

  clearCart(consumerId: string) {
    return this.http.get<MessageResponse>(`${this.cartManagementApi}/clear-cart/${consumerId}`);
  }

}
