import {OrderStatus} from './order-status';

export class Order {
  id: string;
  name: string;
  status: OrderStatus;
  price: number;
}
