import {Page} from './paginated.model';
import {PreModel} from './premodel.model';

export namespace Windows {

  export interface Model extends PreModel {
    color: string;
  }

  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

}
