export abstract class IAccountRepository {
  abstract find(name: string, password: string): Promise<any>;
}
