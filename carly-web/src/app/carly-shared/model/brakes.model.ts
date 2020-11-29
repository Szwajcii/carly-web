import {Page} from './paginated.model';
import {PreModel} from './premodel.model';


export namespace Brake {

  export interface Model extends PreModel {
    brakeType: BrakeType;
  }

  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

  export enum BrakeType {
    HYDRAULIC = 'HYDRAULIC',
    MECHANIC = 'MECHANIC',
    PNEUMATIC = 'PNEUMATIC'
  }

}
