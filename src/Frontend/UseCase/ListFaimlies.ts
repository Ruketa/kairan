import { IFamilyRepository } from "./repository/IFamilyRepository";
import { Family } from "../Domain/Family";

/**
 * @class ListFamilies
 * @brief 家族情報リスト取得
 */
export class ListFamilies {
  private _FamilyRepo!: IFamilyRepository;

  /**
   * コンストラクタ
   *
   * @param   {IFamilyGateway}  gateway      [in]   家族情報ゲートウェイ
   */
  constructor(repository: IFamilyRepository) {
    this._FamilyRepo = repository;
  }

  /**
   * @brief 家族情報リスト取得実行
   * @returns 家族情報リスト
   */
  execute(): Promise<Family[]> {
    return this._FamilyRepo.findAll();
  }
}
