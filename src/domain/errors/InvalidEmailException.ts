export class InvalidValueException extends Error {
  constructor(key: string) {
    super(`${key} is invalid.`);

    this.name = 'InvalidValueException';
  }
}
