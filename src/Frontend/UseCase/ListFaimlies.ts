import { IFamilyGateway } from "./gateway/IFamilyGateway";

/**
 * @class ListFamilies
 * @brief 家族情報リスト取得
 */
export class ListFamilies{
  private _FamilyGateway !: IFamilyGateway;

  /**
   * コンストラクタ
   * 
   * @param   {IFamilyGateway}  gateway      [in]   家族情報ゲートウェイ
   */
  constructor(gateway: IFamilyGateway){
    this._FamilyGateway = gateway;
  }

  /**
   * @brief 家族情報リスト取得実行 
   * @returns 家族情報リスト
   */
  execute(): Promise<boolean>{
    return this._FamilyGateway.findall();
  } 

}

