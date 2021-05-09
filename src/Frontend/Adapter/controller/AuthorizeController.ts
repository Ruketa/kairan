import { AccountAuthorize } from "@/Frontend/UseCase/AccountAuthorize";
//import { WebApiAuthorizeGateway } from "@/Adapter/gateway/WebApiAuthorizeGateway";
import { FirebaseAuthorizeGateway } from "../gateway/FirebaseAuthorizeGateway";

export class AuthorizeController {
  private _AuthorizeGateway!: FirebaseAuthorizeGateway;

  constructor() {
    //this._AuthorizeGateway = new WebApiAuthorizeGateway(
    //  "http://localhost:5000/authorize"
    //);
    this._AuthorizeGateway = new FirebaseAuthorizeGateway();
  }

  public Authorize(account_name: string, password: string): Promise<boolean> {
    const usecase = new AccountAuthorize(this._AuthorizeGateway);
    return usecase.execute(account_name, password);
  }
}
