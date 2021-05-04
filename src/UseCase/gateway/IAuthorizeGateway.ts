/**
 * @class IAuthorizeGateway
 * @brief アカウント認証 インターフェイスクラス
 */
export abstract class IAuthorizeGateway {
  abstract authorize(account_name: string, password: string): boolean;
}
