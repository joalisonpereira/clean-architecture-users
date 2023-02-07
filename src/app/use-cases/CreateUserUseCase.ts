import { User } from 'src/domain/entities/User';
import { type UserRepository } from 'src/domain/repositories/UserRepository';
import { Email } from 'src/domain/value-objects/Email';

interface Input {
  name: string;
  email: string;
}

type Output = Promise<void>;

export class CreateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(data: Input): Output {
    await this.repository.create(
      new User({
        name: data.name,
        email: new Email(data.email)
      })
    );
  }
}
