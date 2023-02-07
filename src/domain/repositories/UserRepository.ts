import { type User } from '../entities/User';

export interface UserRepository {
  create: (user: User) => Promise<any>;
  delete: (uuid: string) => Promise<any>;
}
