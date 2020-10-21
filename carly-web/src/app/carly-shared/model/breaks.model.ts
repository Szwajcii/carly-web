import {Page} from './paginated.model';
import {Brand} from './brand.model';


export namespace Breaks {

  export interface Model {
    id: string;
    name: string;
    brand: Brand;
    preview: string;
    price: string;
    createdDate: Date | string;
    breaksType: string;
  }

  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

  export enum BreaksType {
    HYDRAULIC = 'Hydraulic',
    MECHANIC = 'Mechanic',
    PNEUMATIC = 'Pneumatic'
  }

}
