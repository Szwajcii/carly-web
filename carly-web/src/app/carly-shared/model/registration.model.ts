import {Address} from './address.model';
import {Gender} from './gender.enum';

export namespace Registration {

  export interface Model extends CustomerModel, CompanyModel {
    email: string;
    password: string;
    rePassword: string;
    gender: Gender;
    phone: string;
  }

  export interface CustomerModel {
    firstName: string;
    lastName: string;
  }

  export interface CompanyModel {
    role: string;
    companyName: string;
    address?: Address;
  }

  export type POST = Model;

}
