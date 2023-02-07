import { DeleteUserUseCase } from 'src/app/use-cases/delete-user';
import { User } from 'src/domain/entities/User';
import { Email } from 'src/domain/value-objects/Email';
import { Uuid } from 'src/domain/value-objects/Uuid';
import { UserInMemoryRepository } from 'src/infra/repositories/UserInMemoryRepository';
import { describe, expect, it } from 'vitest';

describe('Application/UseCases/DeleteUserUseCase', () => {
  it('should be defined', () => {
    expect(DeleteUserUseCase).toBeDefined();
  });

  it('should delete user', async () => {
    const repository = new UserInMemoryRepository();

    const uuid = 'd375a1f5-1904-4f19-bb64-3ae4875e43d4';

    repository.users = [
      new User({
        id: new Uuid(uuid),
        name: 'john',
        email: new Email('john@email.com')
      })
    ];

    const useCase = new DeleteUserUseCase(repository);

    await useCase.execute(uuid);

    expect(repository.users).toHaveLength(0);
  });
});
