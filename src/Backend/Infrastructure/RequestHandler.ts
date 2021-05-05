import * as http from "http";
import { IAccountRepository } from "./repository/IAccountRepository";

export class RequestHandler {
  private _accountRepository: IAccountRepository;

  constructor(repository: IAccountRepository) {
    this._accountRepository = repository;
  }

  inhabitants(
    request: http.IncomingMessage,
    response: http.ServerResponse
  ): void {
    console.log("Request handler 'inhabitants' was called");

    response.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
    response.write({ value: "return value" });
    response.end();
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
      .catch((err) => {
        console.log("error due to " + err);
        return response.end();
      });
  }
}
