import { ServerApp } from "./ServerApp"

class Main {
  constructor() {
    const serverApp = new ServerApp();
    serverApp.initServer();
  }
}

const main = new Main();