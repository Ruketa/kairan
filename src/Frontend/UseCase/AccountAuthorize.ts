import { IAuthorizeGateway } from "@/Frontend/UseCase/gateway/IAuthorizeGateway";

/**
 * @class AccountAuthorize
 * @brief アカウント認証クラス
 */
export class AccountAuthorize {
  private _Authorizer!: IAuthorizeGateway;

  /**
   * コンストラクタ
   *
   * @param   {IAuthorizeGateway}  authorizer      [in]   アカウント認証用ゲートウェイ
   */
  constructor(authorizer: IAuthorizeGateway) {
    this._Authorizer = authorizer;
  }

  /**
   * アカウント認証実行
   *
   * @return 認証結果
   */
  execute(account_name: string, password: string): Promise<boolean> {
    return this._Authorizer.authorize(account_name, password);
  }
}
