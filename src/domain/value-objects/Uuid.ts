import { InvalidValueException } from '../errors/InvalidValueException';

export class Uuid {
  constructor(private readonly uuid: string) {
    if (!Uuid.validate(uuid)) {
      throw new InvalidValueException('Uuid');
    }
  }

  static validate(uuid: string): boolean {
    const regexExp =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

    return regexExp.test(uuid);
  }

  get value(): string {
    return this.uuid;
  }
}
