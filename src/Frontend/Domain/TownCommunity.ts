import { TownCommunityDivision } from "@/Frontend/Domain/TownCommunityDivision";
import { Inhabitant } from "@/Frontend/Domain/Inhabitant";
import { KairanBoard } from "@/Frontend/Domain/KairanBoard";

/**
 * @class TownCommunity
 * @brief 町内会 クラス
 */
export class TownCommunity {
  /** 町内会ID */
  private _id!: number;
  /** 町内会名 */
  private _community_name!: string;
  /** 所属住民 */
  private _inhabitants!: Array<Inhabitant>;
  /** 町内会区分け割り当て */
  private _division_assign_map!: Map<Inhabitant, TownCommunityDivision>;
  /** 回覧板 */
  private _kairan_board!: KairanBoard;

  /**
   * コンストラクタ
   *
   * @param   {number}  community_id    [in]  町内会ID
   * @param   {String}  community_name  [in]  町内会名
   */
  constructor(community_id: number, community_name: string) {
    this._id = community_id;
    this._community_name = community_name;
    this._division_assign_map = new Map<Inhabitant, TownCommunityDivision>();
    this._kairan_board = new KairanBoard(community_id, []);
  }

  /**
   * 町内会名称設定
   *
   * @param   {String}  community_name  [in]  町内会名称
   */
  set community_name(community_name: string) {
    this._community_name = community_name;
  }

  /**
   * 町内会名称取得
   * @return 町内会名称
   */
  get community_name(): string {
    return this._community_name;
  }

  /**
   * 住民追加
   * @param   {Inhabitant}  inhabitant  [in]  住民
   * @param   {TownCommunityDivision}  division [in]  町内会区分
   */
  public AddInhabitant(
    inhabitant: Inhabitant,
    division: TownCommunityDivision
  ): void {
    this._inhabitants.push(inhabitant);
    if (division) {
      this.AssignToDivision(inhabitant, division);
    }
    this._kairan_board.AddInhabitantId(inhabitant.id);
  }

  /**
   * 町内会区分割り当て
   * @param   {Inhabitant}  inhabitant  [in]  住民
   * @param   {TownCommunityDivision}  division [in]  町内会区分
   */
  public AssignToDivision(
    inhabitant: Inhabitant,
    division: TownCommunityDivision
  ): void {
    this._division_assign_map.set(inhabitant, division);
  }

  /**
   * 町内会所属住民取得
   * @return { Array<Inhabitants> } 町内会所属住民
   */
  public GetInhabitants(): Array<Inhabitant> {
    return this._inhabitants;
  }

  /**
   * 町内会所属住民取得(区分指定)
   * @return { Array<Inhabitants> } 町内会所属住民
   */
  public FetchInhabitants(division: TownCommunityDivision): Array<Inhabitant> {
    const inhabitants = new Array<Inhabitant>();
    this._division_assign_map.forEach((value, key) => {
      if (value.id === division.id) {
        inhabitants.push(key);
      }
    });
    return inhabitants;
  }
}
