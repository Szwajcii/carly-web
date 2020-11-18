import {Page} from './paginated.model';
import {PreModel} from './premodel.model';


export namespace Breaks {

  export interface Model extends PreModel {
    breaksType: BreaksType;
  }

  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

  export enum BreaksType {
    HYDRAULIC = 'HYDRAULIC',
    MECHANIC = 'MECHANIC',
    PNEUMATIC = 'PNEUMATIC'
  }

}
