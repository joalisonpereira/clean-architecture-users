import { type Email } from 'src/domain/value-objects/Email';
import { type Uuid } from 'src/domain/value-objects/Uuid';

export interface UserProps {
  id: Uuid;
  name: string;
  email: Email;
}

export class User {
  constructor(private readonly props: UserProps) {}

  get id(): Uuid {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get email(): Email {
    return this.props.email;
  }
}
