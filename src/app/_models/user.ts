import { Role } from './role';

export class User {
  id: number;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role;
  token?: string;
  refreshToken?: string;
}
