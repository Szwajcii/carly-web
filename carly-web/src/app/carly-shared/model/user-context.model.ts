import {Roles} from './roles.model';

export class UserContext {
  id: string;
  sub: string;
  firstName: string;
  lastName: string;
  role: Roles;
}
