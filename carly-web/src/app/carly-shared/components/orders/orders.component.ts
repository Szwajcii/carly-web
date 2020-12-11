import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order-model';
import {OrderStatus} from '../../model/order-status';
import {Roles} from '../../model/roles.model';
import {OrderManagementService} from '../../resources/order-management.service';

export const TEST_DATA: Order[] = [
  {
    id: 'jh312k2331',
    name: 'Order one',
    status: OrderStatus.PENDING,
    price: 2500
  }
];


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  CarlyCompany = Roles.CARLY_COMPANY;
  CarlyCustomer = Roles.CARLY_CUSTOMER;
  CarlyAdministrator = Roles.ADMINISTRATOR;

  orders: Order[];

  constructor(
    private orderManagementService: OrderManagementService
  ) {
  }

  ngOnInit(): void {
    this.orders = TEST_DATA;
  }

}
