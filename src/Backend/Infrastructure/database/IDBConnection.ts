export abstract class IDBConnection {
  abstract execute(query: string, param?: any): Promise<any>;
}
