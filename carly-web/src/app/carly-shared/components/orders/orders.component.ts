import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order-model';
import {OrderStatus} from '../../model/order-status';

export const TEST_DATA: Order[] = [
  {
    id: 'jh312k2331',
    name: 'Order one',
    status: OrderStatus.PENDING
  }
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor() { }

  ngOnInit(): void {
    this.orders = TEST_DATA;
  }

}
