import { type DeleteUserUseCase } from 'src/app/use-cases/DeleteUserUseCase';

export class CreateUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

  async execute(): Promise<void> {
    await this.deleteUserUseCase.execute('id');
  }
}
