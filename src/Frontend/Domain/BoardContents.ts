/**
 * @class BoardContents
 * @brief 回覧板コンテンツ クラス
 */
export class BoardContents {
  /** 回覧ドキュメントタイトル */
  private _document_title!: string;
  /** 回覧ドキュメントパス */
  private _document_path!: string;
  /** 回覧開始日 */
  private _start_date!: Date;
  /** 回覧終了日 */
  private _end_date!: Date;
  /** 回覧資料確認状況 */
  private _contents_check_stats!: Map<number, boolean>;

  /**
   * コンストラクタ
   *
   * @param   {Array<number>}  _InhabitantIds [in] 回覧対象住民IDリスト
   */
  constructor(inhabitantIds: Array<number>) {
    inhabitantIds.forEach((inhabitantId) => {
      this._contents_check_stats.set(inhabitantId, false);
    });
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
   * 回覧資料の登録
   * @param   {string}  content_title [in]  回覧資料タイトル
   * @param   {string}  content_path  [in]  回覧資料パス
   */
  public RegisterBoardContent(
    content_title: string,
    content_path: string
  ): void {
    this._document_title = content_title;
    this._document_path = content_path;
  }

  /**
   * 確認状態更新
   *
   * @param   {number}  inhabitantId  [in]  確認住民ID
   */
  public UpdateContentsCheckStatus(inhabitantId: number): void {
    this._contents_check_stats.forEach((value, key) => {
      if (key === inhabitantId) {
        value = true;
      }
    });
  }
}
