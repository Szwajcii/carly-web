import {PreModel} from './premodel.model';
import {Page} from './paginated.model';

export namespace Painting {

  export interface Model extends PreModel {

  }

  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

}
