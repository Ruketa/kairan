/**
 * @class TownCommunityRole
 * @brief 町内会ロール クラス
 */
export class TownCommunityRole{
  /** ロール ID */
  private _id!: number;

  /** ロール */
  private _role!: string;

  /**
   * コンストラクタ
   *
   * @param   {String}  name  [in]  ロール名称
   * */
  constructor(role: string) {
    this._role = role;
  }

  /**
   * ロールID称設定
   *
   * @param   {String}  name  [in]  家族名称
   */
  set id(id: number) {
    this._id= id;
  }

  /**
   * ロールID取得
   * @return ロールID
   */
  get id(): number{
    return this._id;
  }

  /**
   * ロール名称取得
   * @return ロール名称
   */
  get role(): string {
    return this._role;
  }

}