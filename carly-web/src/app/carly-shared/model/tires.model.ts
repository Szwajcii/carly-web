import {Page} from './paginated.model';
import {PreModel} from './premodel.model';

export namespace Tires {

  export interface Model extends PreModel {
    type: TireType;
  }

  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

  export enum TireType {
    REINFORCED = 'Reinforced',
    ALL_ROAD = 'All road'
  }

}
