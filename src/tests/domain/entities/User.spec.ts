import { User } from 'src/domain/entities/User';
import { Email } from 'src/domain/value-objects/Email';
import { Uuid } from 'src/domain/value-objects/Uuid';
import { describe, expect, it } from 'vitest';

describe('Entities/User', () => {
  it('should be defined', () => {
    expect(User).toBeDefined();
  });

  it('should create user instance', () => {
    const user = new User({
      id: new Uuid('184b1b04-ae96-45a7-9bda-697b27f82b04'),
      name: 'Test Boy',
      email: new Email('testboy@email.com')
    });

    expect(user.id?.value).toBeDefined();

    expect(user.name).toBeDefined();

    expect(user.email.value).toBeDefined();
  });

  it('should throws InvalidValueException', () => {
    expect(
      () =>
        new User({
          id: new Uuid('184b1b04-ae96-45a7-9bda-697b27f82b04'),
          name: 'Test Boy',
          email: new Email('invalid-email')
        })
    ).toThrow(Error);
  });
});
