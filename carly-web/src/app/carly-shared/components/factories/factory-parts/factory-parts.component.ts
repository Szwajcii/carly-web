import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PartDetailsDialogComponent} from '../../part-details-dialog/part-details-dialog.component';
import {AddPartDialogComponent} from '../add-part-dialog/add-part-dialog.component';

export const TEST_DATA = [
  {
    name: 'Brakes One',
    preview: 'brakes_1.png',
    price: 300
  },
  {
    name: 'Brakes Two',
    preview: 'brakes_2.png',
    price: 150
  },
  {
    name: 'Brakes Two',
    preview: 'brakes_2.png',
    price: 150
  },
  {
    name: 'Brakes Two',
    preview: 'brakes_2.png',
    price: 150
  },
  {
    name: 'Brakes Two',
    preview: 'brakes_2.png',
    price: 150
  },
  {
    name: 'Brakes Two',
    preview: 'brakes_2.png',
    price: 150
  },
  {
    name: 'Brakes Two',
    preview: 'brakes_2.png',
    price: 150
  },
  {
    name: 'Brakes Two',
    preview: 'brakes_2.png',
    price: 150
  },
  {
    name: 'Brakes Two',
    preview: 'brakes_2.png',
    price: 150
  },
  {
    name: 'Brakes Two',
    preview: 'brakes_2.png',
    price: 150
  },
  {
    name: 'Brakes Two',
    preview: 'brakes_2.png',
    price: 150
  },
  {
    name: 'Brakes Two',
    preview: 'brakes_2.png',
    price: 150
  }
];


@Component({
  selector: 'app-factory-parts',
  templateUrl: './factory-parts.component.html',
  styleUrls: ['./factory-parts.component.scss']
})
export class FactoryPartsComponent implements OnInit {

  @Input() isMatched: boolean;
  parts = new Map();

  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {

    this.parts.set('Brakes', TEST_DATA);
    this.parts.set('Wheels', TEST_DATA);
    this.parts.set('Engines', TEST_DATA);
    this.parts.set('Equipment', TEST_DATA);
    this.parts.set('Tires', TEST_DATA);
    this.parts.set('Windows', TEST_DATA);
    this.parts.set('Paintings', TEST_DATA);

  }

  openPartDetails(part: any, type: string) {
    this.dialog.open(PartDetailsDialogComponent, {
      data: {
        partPreview: part.preview,
        partType: type
      }
    });
  }

  openAddToCartDialog(part: any) {
    this.dialog.open(AddPartDialogComponent, {
      data: {
        partName: part.name,
        partPrice: part.price
      }
    });
  }

}
