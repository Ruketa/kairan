/**
 * @class Inhabitant
 * @brief 住民情報 クラス
 */
export class Inhabitant {
  /** 住民 ID */
  private _id!: number;
  /** 家族名称 */
  private _family_name!: string;

  /**
   * コンストラクタ
   *
   * @param   {String}  name  [in]  家族名称
   * */
  constructor(family_name: string) {
    this._family_name = family_name;
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
}
