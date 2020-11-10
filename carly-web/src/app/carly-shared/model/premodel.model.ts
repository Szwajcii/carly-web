import {Brand} from './brand.model';

export class PreModel {
  id: string;
  name: string;
  brand: Brand;
  preview?: string;
  price: number;
  createdDate: Date | string;
  modifiedDate: Date | string;
}
