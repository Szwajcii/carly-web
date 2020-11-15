import {Page} from './paginated.model';
import {PreModel} from './premodel.model';

export namespace Engine {

  export interface Model extends PreModel {
    horsePower: number;
    weight: number;
    capacity: number;
    engineType: CylinderType;
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
