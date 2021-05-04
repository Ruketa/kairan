import { IAuthorizeGateway } from "@/UseCase/gateway/IAuthorizeGateway";

export class WebApiAuthorizeGateway extends IAuthorizeGateway {
  /** 認証APIエンドポイントURL */
  private _ApiUrl!: string;

  /**
   * コンストラクタ
   */
  constructor(ApiUrl: string) {
    super();
    this._ApiUrl = ApiUrl;
  }

  authorize(account_name: string, password: string): boolean {
    const request_json = {
      account_name: account_name,
      password: password,
    };
    fetch(this._ApiUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(request_json),
    });
    return true;
  }
}
