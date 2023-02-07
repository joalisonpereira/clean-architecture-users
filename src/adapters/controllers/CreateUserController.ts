import { type CreateUserUseCase } from 'src/app/use-cases/CreateUserUseCase';

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async execute(): Promise<void> {
    await this.createUserUseCase.execute({
      name: 'john',
      email: 'john@email.com'
    });
  }
}
