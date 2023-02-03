import { InvalidValueException } from '../errors/InvalidValueException';

export class Email {
  constructor(private readonly email: string) {
    if (!Email.validate(email)) {
      throw new InvalidValueException('Email');
    }
  }

  static validate(value: string): boolean {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
  }

  get value(): string {
    return this.email;
  }
}
