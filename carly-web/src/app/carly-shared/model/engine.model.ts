import {Brand} from './brand.model';
import {Page} from './paginated.model';

export namespace Engine {

  export interface Model {
    id: string;
    brand: Brand;
    name: string;
    preview: string;
    price: number;
    createdDate: Date | string;

    // todo: extract common fields to external model
    horsePower: number;
    weight: number;
    capacity: number;
    numberOfCylinders: CylinderType;
  }


  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

  export enum CylinderType {
    V4 = 'V4',
    V6 = 'V6',
    V8 = 'V8'
  }

}
