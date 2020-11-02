import {Address} from './address.model';
import {Page} from './paginated.model';

export namespace Company {

  export interface Model {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    address: Address;
    createDate: Date | string;
  }

  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

}
