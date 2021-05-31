import { IFamilyRepository } from "../Infrastructure/repository/IFamilyRepository";
import { IDBConnection } from "../Infrastructure/database/IDBConnection";

export class FamilyRepository extends IFamilyRepository{
  private _connection !: IDBConnection;

  constructor(connection: IDBConnection){
    super();
    this._connection = connection;
  }

  findall(): Promise<any> {
    const query = 'select * from family'
    const queryResult = this._connection.execute(query)
    return queryResult;
  }
}