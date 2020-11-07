import {Roles} from './roles.model';
import {Address} from './address.model';
import {Car} from './car.model';
import {Gender} from './gender.enum';

export class User {

  id: string;
  roles: Roles[];
  companyId: string;
  code: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: Address;
  addressHistory: Address[];
  cars: Car.Model[];
  gender: Gender;
  password: string;
  createdAt: Date | string;
  enabled: boolean;

}
