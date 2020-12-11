import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartElement} from '../../../model/cart-element.model';
import {PartType} from '../../../model/part-type.enum';
import {brakesSpecificParts, tiresSpecificParts} from './cart-test-data';
import {CartManagementService} from '../../../resources/cart-management.service';
import {CartPartUpdate} from '../../../model/cart-part-update.model';

// todo: Remove after testing
export const FACTORY_ONE_TEST_DATA: CartElement = {
  factoryId: '11111',
  factoryName: 'Factory one',
  totalAmountOfFactory: 1000,
  totalQuantityOfFactory: 12,
  parts: new Map([
    [PartType.BRAKES, brakesSpecificParts],
    [PartType.TIRES, tiresSpecificParts]
  ])
};

// todo: Remove after testing
export const FACTORY_TWO_TEST_DATA: CartElement = {
  factoryId: '22222',
  factoryName: 'Factory two',
  totalAmountOfFactory: 1000,
  totalQuantityOfFactory: 8,
  parts: new Map([
    [PartType.BRAKES, brakesSpecificParts],
    [PartType.TIRES, tiresSpecificParts]
  ])
};

export const PartTypeMap = new Map([
  ['Brakes', PartType.BRAKES],
  ['Engine', PartType.ENGINE],
  ['Equipment', PartType.EQUIPMENT],
  ['Tires', PartType.TIRES],
  ['Painting', PartType.PAINTING],
  ['Wheels', PartType.WHEELS],
  ['Windows', PartType.WINDOWS]
]);


@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.scss']
})
export class CartDataComponent implements OnInit {

  @Output() makeOrderEvent = new EventEmitter<any>();
  @Output() orderAllEvent = new EventEmitter<any>();
  @Input() consumerId: string;
  @Input() cartElements: CartElement[] = [];

  constructor(
    private cartManagementService: CartManagementService
  ) {
  }

  ngOnInit(): void {
    // todo: Remove after testing
    this.cartElements.push(FACTORY_ONE_TEST_DATA);
    this.cartElements.push(FACTORY_TWO_TEST_DATA);
  }

  onClick($event: any) {
    $event.preventDefault();
  }

  // Cart methods - start

  orderAll() {

  }

  clearCart() {
    this.cartManagementService.clearCart(this.consumerId);
  }

  // Cart methods - end

  // Cart element methods - start

  makeOrder(cartElement: CartElement) {
    console.log(cartElement);
  }

  removeElementFromCart(cartElement: CartElement) {
    console.log(cartElement);
  }

  // Cart element methods - end

  // Part methods - start

  openPartDetails(part: any) {
    console.log(part);
  }

  removePartFromCart(cartElementIndex: number, key: string, partIndex: number) {
    const partType = PartTypeMap.get(key);
    this.cartElements[cartElementIndex].parts.get(partType).splice(partIndex, 1);

    // todo: Here call API
    this.cartManagementService.removeFromCart(new CartPartUpdate());

  }

  addAmount() {
    this.changeTotalAmount();
    this.cartManagementService.updateCart(new CartPartUpdate());
  }

  removeAmount() {
  }

  changeTotalAmount() {
  }

  isValidAmount($event: any) {
    console.log($event.target.value);
  }

  // Part methods - end

}
