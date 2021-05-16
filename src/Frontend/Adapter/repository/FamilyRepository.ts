import {
  FamilyJson,
  IFamilyGateway,
} from "@/Frontend/UseCase/gateway/IFamilyGateway";
import { IFamilyRepository } from "@/Backend/Infrastructure/repository/IFamilyRepository";
import { Family } from "@/Frontend/Domain/Family";

export class FamilyRepository implements IFamilyRepository {
  private _gateway!: IFamilyGateway;

  /**
   * コンストラクタ
   */
  constructor(gateway: IFamilyGateway) {
    this._gateway = gateway;
  }

  /**
   * @brief 家族情報リスト取得
   * @return 家族情報リスト
   */
  findAll(): Promise<Array<Family>> {
    console.log("class : FamilyRepository => findAll is called");
    const result = this._gateway
      .findAll()
      .then((families_json: Array<FamilyJson>) => {
        const families: Array<Family> = [];
        families_json.forEach((family_json: FamilyJson) => {
          const family = new Family(
            family_json.family_name,
            family_json.description,
            family_json.icon_url
          );
          family.id = family_json.id;
          families.push(family);
        });
        return families;
      })
      .catch((res: any) => {
        console.log("repository: error in fetch family data");
        return [];
      });
    return result;
  }
}
