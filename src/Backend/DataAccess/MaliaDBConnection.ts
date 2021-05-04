import mariadb from "mariadb";
import { IDBConnection } from "../Infrastructure/database/IDBConnection";

export class MariaDBConnetion extends IDBConnection {
  private pool: mariadb.Pool;

  constructor() {
    super();

    console.log(process.env.DB_HOST_DEV);

    this.pool = mariadb.createPool({
      connectionLimit: 5,
      host: "localhost", //process.env.DB_HOST_DEV,
      user: "root", //process.env.DB_USER_DEV,
      password: "9rip0n", //process.env.DB_USER_PASSWORD_DEV,
      database: "town_community", //process.env.DB_NAME_DEV,
    });

    this.pool
      .getConnection()
      .then((connection) => {
        console.log("connected! connection id is " + connection.threadId);
        connection.release();
      })
      .catch((error) => {
        console.log("not connected due to error: " + error);
      });

    this.pool.on("connection", (connection: mariadb.Connection) => {
      console.log("mariadb connection create");
    });

    this.pool.on("release", (connection: mariadb.Connection) => {
      console.log("connection %d was released", connection.threadId);
    });
  }

  execute(query: string, params?: any): Promise<any> {
    return this.pool.query(query, params);
  }
}
