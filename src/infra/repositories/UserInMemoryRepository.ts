import { type User } from 'src/domain/entities/User';
import { type UserRepository } from 'src/domain/repositories/UserRepository';

export class UserInMemoryRepository implements UserRepository {
  public users: User[] = [];

  async create(data: User): Promise<void> {
    this.users.push(data);
  }

  async delete(uuid: string): Promise<void> {
    this.users = this.users.filter((item) => item.id.value !== uuid);
  }
}
