/**
 * @class Region
 * @brief 地域情報クラス
 */
export class Region{
  /** 地域ID */
  private _id!: number;
  /** 地域名 */
  private _region_name !: string;

  /**
   * コンストラクタ
   * 
   * @param   {String}  name  [in]  地域名称
   */
  constructor(region_name: string){
    this._region_name = region_name
  }

  /**
   * 地域名称取得
   * 
   * @return   {String}  name  [in]  地域名称
   */
  get region_name():string{
    return this._region_name;
  }

  /**
   * 地域ID取得
   * 
   * @return   {number}  id  [in]  地域ID
   */
  get id():number{
    return this._id;
  }

  /**
   * 地域ID設定
   * 
   * @param   {number}  id  [in]  地域ID
   */
  set id(id: number){
    this._id = id;
  }

}
