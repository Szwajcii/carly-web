import {Page} from './paginated.model';
import {Brand} from './brand.model';

export namespace CarModel {

  export interface Model {
    id: string;
    brand: Brand;
    name: string;
    variant: CarVariant;
  }

  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

  export enum CarVariant {
    Kombi = 'Kombi',
    Sedan = 'Sedan',
    Hatchback = 'Hatchback',
    Compact = 'Compact',
    SUV = 'SUV',
    Minivan = 'Minivan',
    Cabriolet = 'Cabriolet',
    Coupe = 'Coupe'
  }

}
