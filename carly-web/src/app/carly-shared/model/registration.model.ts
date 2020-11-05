import {Address} from './address.model';

export namespace Registration {

  export interface Model extends CustomerModel, CompanyModel {
    email: string;
    password: string;
    repeatPassword: string;
  }

  export interface CustomerModel {
    firstName: string;
    lastName: string;
    gender: Gender;
  }

  export interface CompanyModel {
    companyName: string;
    phoneNumber: string;
    address?: Address;
  }

  export type POST = Model;

  export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
  }

}
