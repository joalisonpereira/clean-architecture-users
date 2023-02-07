import { User } from 'src/domain/entities/User';
import { type UserRepository } from 'src/domain/repositories/UserRepository';
import { type CreateUserOutput, type CreateUserInput } from './boundaries';

export class CreateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(data: CreateUserInput): CreateUserOutput {
    await this.repository.create(new User(data));
  }
}
