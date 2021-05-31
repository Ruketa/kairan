/**
 * @class IFamilyGateway
 * @brief 家族情報 インターフェイスクラス
 */
export abstract class IFamilyGateway {
  abstract findall(): Promise<boolean>;
}
