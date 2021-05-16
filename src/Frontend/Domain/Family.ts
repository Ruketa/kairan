/**
 * @class Family
 * @brief 家族情報 クラス
 */
export class Family {
  /** 家族ID */
  private _id!: number;

  /** 家族名称 */
  private _family_name!: string;

  /** 家族説明 */
  private _description!: string;

  /** アイコン */
  private _icon_url!: string;

  /**
   * コンストラクタ
   */
  constructor(family_name: string, description: string, icon_url: string) {
    this._family_name = family_name;
    this._description = description;
    this._icon_url = icon_url;
  }

  /**
   * 家族ID取得
   * @return 家族ID
   */
  get id(): number {
    return this._id;
  }

  /**
   * 家族ID設定
   * @param {number}  family_id [in]  家族ID
   */
  set id(family_id: number) {
    this._id = family_id;
  }

  /**
   * 家族名称取得
   * @return 家族名称
   */
  get family_name(): string {
    return this._family_name;
  }

  /**
   * 家族名称設定
   * @param {String}  family_name [in]  家族名称
   */
  set family_name(family_name: string) {
    this._family_name = family_name;
  }

  /**
   * 家族説明取得
   * @return 家族説明
   */
  get description(): string {
    return this._description;
  }

  /**
   * 家族説明設定
   * @param {String}  description [in]  家族説明
   */
  set description(description: string) {
    this._description = description;
  }

  /**
   * アイコンURL取得
   * @return アイコンURL
   */
  get icon_url(): string {
    return this._icon_url;
  }

  /**
   * アイコンURL設定
   * @param {String}  icon_url [in]  アイコンURL
   */
  set icon_url(icon_url: string) {
    this._icon_url = icon_url;
  }
}
