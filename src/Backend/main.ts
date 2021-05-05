import { ServerApp } from "./Infrastructure/ServerApp";

class Main {
  private _ServerApp!: ServerApp;

  constructor() {
    this._ServerApp = new ServerApp();
    this._ServerApp.initServer();
  }

  public Start(): void {
    this._ServerApp.startServer();
  }
}

const main = new Main();
main.Start();
