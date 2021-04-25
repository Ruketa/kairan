import mariadb from "mariadb"


export class MariaDBConnetion {
  private pool: any;

  constructor() {
    this.pool = mariadb.createPool({
      connectionLimit: 5,
      host: process.env.DB_HOST_DEV,
      user: process.env.DB_USER_DEV,
      password: process.env.DB_USER_PASSWORD_DEV,
      database: process.env.DB_NAME_DEV
    })

    this.pool.getConnection()    

  }

  execute(){

  }
}