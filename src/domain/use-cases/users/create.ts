import { type UserRepository } from 'src/domain/repositories/UserRepository';
import { type UserProps } from 'src/domain/entities/User';

export class CreateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(data: UserProps): Promise<void> {
    await this.repository.create(data);
  }
}
