
import { ServerApp } from "@/Backend/ServerApp"

class Main {
  constructor() {
    const serverApp = new ServerApp();
    serverApp.initServer();
  }
}

const main = new Main();