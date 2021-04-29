import { TownCommunityRole } from "@/Domain/TownCommunityRole"
/**
 * @class Inhabitant
 * @brief 住民 クラス
 */
export class Inhabitant {
  /** 住民 ID */
  private _id!: number;
  /** 家族名称 */
  private _family_name!: string;
  /** 担当ロール */
  private _role !: TownCommunityRole; 

  /**
   * コンストラクタ
   *
   * @param   {String}  name  [in]  家族名称
   * @param   {String}  role  [in]  担当ロール 
   * */
  constructor(family_name: string, role: TownCommunityRole) {
    this._family_name = family_name;
    this._role = role
  }

  /**
   * 住民ID取得 
   * @return 住民ID
   */
  get id(): number{
    return this._id;
  }

  /**
   * 家族名称設定
   *
   * @param   {String}  name  [in]  家族名称
   */
  set family_name(name: string) {
    this._family_name = name;
  }

  /**
   * 家族名称取得
   * @return 家族名称
   */
  get family_name(): string {
    return this._family_name;
  }

  /**
   * ロール設定
   *
   * @param   {TownCommunityRole}  role  [in]  ロール
   */
  set role(role: TownCommunityRole) {
    this._role = role;
  }

  /**
   * ロール取得
   * @return ロール
   */
  get role(): TownCommunityRole{
    return this._role;
  }

}
