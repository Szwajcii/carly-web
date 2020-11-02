import {Page} from './paginated.model';

export namespace News {

  export interface Model {
    title: string;
    description: string;
    image: string;
    newsType: string;
  }

  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

}
