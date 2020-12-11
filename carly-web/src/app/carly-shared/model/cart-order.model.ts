import {CartElement} from './cart-element.model';

export class CartOrder {
  consumerId: string;
  consumerName: string;
  totalQuantity: number;
  totalAmount: number;
  factoryParts: CartElement[];
}
