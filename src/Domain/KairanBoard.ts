import { Inhabitant } from "@/Domain/Inhabitant";
import { BoardContents } from "@/Domain/BoardContents";

/**
 * @class KairanBoard
 * @brief 回覧板 クラス
 */
export class KairanBoard{
  /** 回覧地区ID */
  private _region_id!: number;

  /** 回覧住民 */
  private _inhabitants!: Array<Inhabitant>

  /** 回覧コンテンツ */
  private _board_contents!: BoardContents
  
  /** 回覧順 */

  /** 全体集会出欠確認 */

  /**
   * コンストラクタ
   * 
   * @param   {number} region_id   [in]  回覧地区ID
   * @param   {Array<Inhabitant>} inhabitants   [in]  回覧住民
   */
  constructor(region_id: number, inhabitants: Array<Inhabitant>){
    this._region_id = region_id
    this._inhabitants = inhabitants
  }
}