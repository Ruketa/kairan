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
  private _inhabitantIds!: Array<number>

  /** 回覧コンテンツ */
  private _board_contents!: Array<BoardContents>
  
  /** 回覧順 */

  /** 全体集会出欠確認 */

  /**
   * コンストラクタ
   * 
   * @param   {number} region_id   [in]  回覧地区ID
   * @param   {Array<number>} inhabitantIds   [in]  回覧住民ID
   */
  constructor(region_id: number, inhabitantIds: Array<number>){
    this._region_id = region_id
    this._inhabitantIds = inhabitantIds
  }

  /**
   * 回覧コンテンツ取得
   * 
   * @return 回覧コンテンツ
   */
  get board_contents(): Array<BoardContents>{
    return this._board_contents;
  }

  /**
   * 回覧対象住民ID追加
   * 
   * @param   {number} inhabitantId  [in]  回覧対象住民ID
   */
  public AddInhabitantId(inhabitantId: number):void{
    this._inhabitantIds.push(inhabitantId)
  }

  /**
   * 回覧コンテンツの追加
   * 
   * @param   {string} title  [in]  回覧資料タイトル
   * @param   {string} path   [in]  回覧資料パス
   */
  public AddNewContents(title:string, path:string):void{
    let contents = new BoardContents(this._inhabitantIds);
    contents.RegisterBoardContent(title, path)
    this._board_contents.push(contents);
  }

}