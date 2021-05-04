import { IAuthorizeGateway } from "@/Frontend/UseCase/gateway/IAuthorizeGateway";

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

  authorize(account_name: string, password: string): Promise<boolean> {
    const request_json = {
      account_name: account_name,
      password: password,
    };

    return fetch(this._ApiUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(request_json),
    })
      .then((res: Response) => {
        return res.json();
      })
      .then((json_data: any) => {
        return !("error" in json_data);
      });
  }

  signup(account_name: string, password: string): Promise<boolean> {
    return new Promise<boolean>(function () {
      return true;
    });
  }
}
