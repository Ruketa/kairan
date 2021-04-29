import express from "express";
import cors from "cors";
import path from "path";
import * as http from "http";

import { RequestHandler } from "./RequestHandler";

export class ServerApp {
  private port!: number;
  private webServer!: http.Server;

  constructor() {
    this.port = 5000;
  }

  public initServer(): void {
    const server = express();
    server.use(express.static(path.join(__dirname, "public")));
    server.use(cors({ origin: true }));

    // routing
    server.get("/inhabitant", RequestHandler.inhabitants);

    this.webServer = http.createServer(server);
  }

  public startServer(): void {
    this.webServer.listen(this.port, () => {
      console.log("Running at port 5000");
    });
  }
}