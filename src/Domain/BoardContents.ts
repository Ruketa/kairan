import { Inhabitant } from "@/Domain/Inhabitant";

/**
 * @class BoardContents
 * @brief 回覧板コンテンツ クラス 
 */
export class BoardContents{
  /** 回覧ドキュメントパス */
  private _document_path!: string;
  /** 回覧開始日 */
  private _start_date!: Date; 
  /** 回覧終了日 */
  private _end_date!: Date; 
  /** 回覧資料確認状況 */
  private _contents_check_stats!: Map<Inhabitant, boolean>

  /**
   * コンストラクタ
   * 
   * @param   {Array<Inhabitant>}  _Inhabitants [in] 回覧対象住民リスト
   */
  constructor(inhabitants: Array<Inhabitant>){
    inhabitants.forEach(inhabitant =>{
      this._contents_check_stats.set(inhabitant, false);
    })
  }

  /**
   * 回覧開始日設定
   * @param   {Date}  start_date  [in]  回覧開始日
   */
  set start_date(start_date: Date) {
    this._start_date = start_date;
  }

  /**
   * 回覧開始日取得
   * @return 回覧開始日
   */
  get start_date(): Date {
    return this._start_date;
  }

  /**
   * 回覧終了日設定
   * @param   {Date}  end_date  [in]  回覧終了日
   */
  set end_date(end_date: Date) {
    this._end_date = end_date;
  }

  /**
   * 回覧終了日取得
   * @return 回覧開始日
   */
  get end_date(): Date {
    return this._end_date;
  }

  /**
   * 確認状態更新
   * 
   * @param   {Inhabitant}  inhabitant  [in]  確認住民
   */
  public UpdateContentsCheckStatus(inhabitant: Inhabitant){
    this._contents_check_stats.forEach((value, key)=>{
      if(key.family_name === inhabitant.family_name){
        value = true;
      }
    })
  }

}