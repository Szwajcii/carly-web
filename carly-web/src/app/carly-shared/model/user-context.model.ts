import {Roles} from './roles.model';

export class UserContext {
  sub: string;
  firstName: string;
  lastName: string;
  role: Roles;
}
