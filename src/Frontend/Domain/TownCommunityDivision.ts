/**
 * @class TownCommunityDivision
 * @brief 町内会区分けクラス
 */
export class TownCommunityDivision {
  /** 区分けID */
  private _id!: number;
  /** 区分け名 */
  private _division_name!: string;

  /**
   * コンストラクタ
   *
   * @param {string}  division_name [in]  区分け名
   */
  constructor(division_name: string) {
    this._division_name = division_name;
  }

  /**
   * 区分けID称設定
   *
   * @param {number}  id  [in]  区分けID
   */
  set id(id: number) {
    this._id = id;
  }

  /**
   * 区分けID取得
   * @return 区分けID
   */
  get id(): number {
    return this._id;
  }

  /**
   * 区分け名称設定
   *
   * @param {String}  division_name  [in]  区分け名称
   */
  set division_namw(division_name: string) {
    this._division_name = division_name;
  }

  /**
   * 区分け名称取得
   * @return 区分け名称
   */
  get division_name(): string {
    return this._division_name;
  }
}
