import { type User } from '../entities/User';

export interface UserRepository {
  create: (data: User) => Promise<any>;
  delete: (uuid: string) => Promise<any>;
}
