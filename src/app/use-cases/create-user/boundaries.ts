export interface CreateUserInput {
  name: string;
  email: string;
}

export type CreateUserOutput = Promise<void>;
