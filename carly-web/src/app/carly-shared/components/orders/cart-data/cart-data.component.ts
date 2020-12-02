import {Component, Input, OnInit} from '@angular/core';
import {CartElement} from '../../../model/cart-element.model';

@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.scss']
})
export class CartDataComponent implements OnInit {

  @Input() cartElements: CartElement[];

  constructor() { }

  ngOnInit(): void {
  }

  onClick($event: any) {
    $event.preventDefault();
  }

  removeItem() {

  }

}
