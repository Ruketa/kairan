import { IAccountRepository } from "../Infrastructure/repository/IAccountRepository";
import { IDBConnection } from "../Infrastructure/database/IDBConnection";

export class AccountRepository extends IAccountRepository {
  private connection!: IDBConnection;

  constructor(connection: IDBConnection) {
    super();
    this.connection = connection;
  }

  find(name: string, password: string): Promise<any> {
    const query =
      'select * from account where account_name = "' +
      name +
      '" and password = "' +
      password +
      '"';
    const queryResult = this.connection.execute(query);
    return queryResult;
  }
}
