import { type UserRepository } from 'src/domain/repositories/UserRepository';

export class DeleteUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(uuid: string): Promise<void> {
    await this.repository.delete(uuid);
  }
}
