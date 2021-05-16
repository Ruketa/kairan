import express from "express";
import cors from "cors";
import path from "path";
import * as http from "http";

import { RequestHandler } from "./RequestHandler";
import { MariaDBConnetion } from "../DataAccess/MaliaDBConnection";
import { AccountRepository } from "../Repository/AccountRepository";
import { FamilyRepository } from "../Repository/FamilyRepository";

export class ServerApp {
  private port!: number;
  private webServer!: http.Server;

  constructor() {
    this.port = 5000;
  }

  public initServer(): void {
    // create server instance
    const server = express();
    server.use(express.static(path.join(__dirname, "public")));
    server.use(cors({ origin: true }));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    const connection = new MariaDBConnetion();
    const accountRepository = new AccountRepository(connection);
    const familyRepository = new FamilyRepository(connection);
    const requestHandler = new RequestHandler(
      accountRepository,
      familyRepository
    );

    // routing
    server.get(
      "/inhabitant",
      (req: http.IncomingMessage, res: http.ServerResponse) => {
        return requestHandler.inhabitants(req, res);
      }
    );
    server.get(
      "/families",
      (req: http.IncomingMessage, res: http.ServerResponse) => {
        return requestHandler.families(req, res);
      }
    );
    server.post("/authorize", (req: any, res: any) => {
      return requestHandler.authorize(req, res);
    });

    this.webServer = http.createServer(server);
  }

  public startServer(): void {
    this.webServer.listen(this.port, () => {
      console.log("Running at port 5000");
    });
  }
}
