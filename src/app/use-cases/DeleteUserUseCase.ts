import { type UserRepository } from 'src/domain/repositories/UserRepository';

type Input = string;

type Output = Promise<void>;

export class DeleteUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(uuid: Input): Output {
    await this.repository.delete(uuid);
  }
}
