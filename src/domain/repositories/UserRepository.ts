export interface UserRepository {
  create: (data: any) => Promise<any>;
  delete: (uuid: string) => Promise<any>;
}
