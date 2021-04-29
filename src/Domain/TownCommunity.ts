import { TownCommunityDivision } from "@/Domain/TownCommunityDivision"
import { Inhabitant } from "@/Domain/Inhabitant"

/**
 * @class TownCommunity
 * @brief 町内会 クラス
 */
export class TownCommunity{
  /** 町内会ID */
  private _id!: number;
  /** 町内会名 */
  private _community_name!: string;
  /** 所属住民 */
  private _inhabitants!: Array<Inhabitant>
  /** 町内会区分け割り当て */
  private _division_assign_map!: Map<Inhabitant, TownCommunityDivision>

  /**
   * コンストラクタ
   *
   * @param   {String}  name  [in]  町内会名
   */
  constructor(community_name: string){
    this._community_name = community_name;
    this._division_assign_map = new Map<Inhabitant, TownCommunityDivision>()
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
  public AddInhabitant(inhabitant: Inhabitant, division: TownCommunityDivision){
    this._inhabitants.push(inhabitant);
    if(division){
      this.AssignToDivision(inhabitant, division);
    }
  }

  /**
   * 町内会区分割り当て 
   * @param   {Inhabitant}  inhabitant  [in]  住民
   * @param   {TownCommunityDivision}  division [in]  町内会区分
   */
  public AssignToDivision(inhabitant: Inhabitant, division: TownCommunityDivision){
    this._division_assign_map.set(inhabitant, division)
  }

  /**
   * 町内会所属住民取得
   * @return { Array<Inhabitants> } 町内会所属住民
   */
  public GetInhabitants(inhabitant: Inhabitant, division: TownCommunityDivision){
    return this._inhabitants
  }

  /**
   * 町内会所属住民取得(区分指定)
   * @return { Array<Inhabitants> } 町内会所属住民
   */
  public FetchInhabitants(division: TownCommunityDivision){
    let inhabitants = new Array<Inhabitant>();
    this._division_assign_map.forEach((value, key)=>{
      inhabitants.push(key)
    })
    return inhabitants;
  }
}
