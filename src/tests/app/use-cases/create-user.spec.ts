import { CreateUserUseCase } from 'src/app/use-cases/create-user';
import { UserInMemoryRepository } from 'src/infra/repositories/UserInMemoryRepository';
import { describe, expect, it } from 'vitest';

describe('Application/UseCases/CreateUserUseCase', () => {
  it('should be defined', () => {
    expect(CreateUserUseCase).toBeDefined();
  });

  it('should create user', async () => {
    const repository = new UserInMemoryRepository();

    const useCase = new CreateUserUseCase(repository);

    await useCase.execute({ name: 'john', email: 'john@email.com' });

    expect(repository.users).toHaveLength(1);

    expect(repository.users[0].name).toEqual('john');
  });
});
