import { AccountAuthorize } from "@/UseCase/AccountAuthorize";
import { WebApiAuthorizeGateway } from "@/Adapter/gateway/WebApiAuthorizeGateway";

export class AuthorizeController {
  private _AuthorizeGateway!: WebApiAuthorizeGateway;

  constructor() {
    this._AuthorizeGateway = new WebApiAuthorizeGateway(
      "http://localhost:5000/authorize"
    );
  }

  public Authorize(account_name: string, password: string): boolean {
    const usecase = new AccountAuthorize(this._AuthorizeGateway);
    return usecase.execute(account_name, password);
  }
}
