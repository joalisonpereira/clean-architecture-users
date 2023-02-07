import { type User } from 'src/domain/entities/User';
import { type UserRepository } from 'src/domain/repositories/UserRepository';
import { randomUUID } from 'node:crypto';
import { Uuid } from 'src/domain/value-objects/Uuid';

export class UserInMemoryRepository implements UserRepository {
  public users: User[] = [];

  async create(user: User): Promise<void> {
    user.id = new Uuid(randomUUID());

    this.users.push(user);
  }

  async delete(uuid: string): Promise<void> {
    this.users = this.users.filter((item) => item.id?.value !== uuid);
  }
}
