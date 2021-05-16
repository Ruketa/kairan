import * as http from "http";
import { IAccountRepository } from "./repository/IAccountRepository";
import { IFamilyRepository } from "./repository/IFamilyRepository";

export class RequestHandler {
  private _accountRepository!: IAccountRepository;
  private _familyRepository!: IFamilyRepository;

  constructor(
    accountRepository: IAccountRepository,
    familyRepository: IFamilyRepository
  ) {
    this._accountRepository = accountRepository;
    this._familyRepository = familyRepository;
  }

  public inhabitants(
    request: http.IncomingMessage,
    response: http.ServerResponse
  ): void {
    console.log("Request handler 'inhabitants' was called");

    response.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
    response.write({ value: "return value" });
    response.end();
  }

  public families(request: any, response: any): Promise<any> {
    console.log("Request handler 'famillies' was called");
    return this._familyRepository
      .findAll()
      .then((res: any) => {
        if (!res[0]) {
          return response.status(404).json({
            error: {
              message: "Not found families",
            },
          });
        }
        return response.send(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log("error due to " + err);
        return response.end();
      });
  }

  authorize(request: any, response: any): Promise<any> {
    console.log("Request handler 'authorize' was called");

    return this._accountRepository
      .find(request.body.account_name, request.body.password)
      .then((res: any) => {
        console.log(res[0]);
        if (!res[0]) {
          return response.status(404).json({
            error: {
              message: "Not found the account",
            },
          });
        }

        return response.send(JSON.stringify(res[0]));
      })
      .catch((err: any) => {
        console.log("error due to " + err);
        return response.end();
      });
  }
}
