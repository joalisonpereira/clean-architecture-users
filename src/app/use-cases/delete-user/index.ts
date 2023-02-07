import { type UserRepository } from 'src/domain/repositories/UserRepository';
import { type DeleteUserInput, type DeleteUserOutput } from './boundaries';

export class DeleteUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(uuid: DeleteUserInput): DeleteUserOutput {
    await this.repository.delete(uuid);
  }
}
