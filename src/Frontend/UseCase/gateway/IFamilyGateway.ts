/**
 * @class IFamilyGateway
 * @brief 家族情報 インターフェイスクラス
 */
export abstract class IFamilyGateway {
  abstract findAll(): Promise<Array<FamilyJson>>;
}

export type FamilyJson = {
  id: number;
  family_name: string;
  description: string;
  icon_url: string;
};
