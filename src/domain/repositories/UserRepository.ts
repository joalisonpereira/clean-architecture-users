import { type User } from '../entities/User';

export interface UserRepository {
  create: (user: User) => Promise<void>;
  delete: (uuid: string) => Promise<void>;
}
