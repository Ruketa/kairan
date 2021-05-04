import { Inhabitant } from "@/Frontend/Domain/Inhabitant";
import { IInhabitantRepository } from "./repository/IInhabitantRepository";

export class ListInhabits {
  private _inhabitantRepository!: IInhabitantRepository;

  constructor(inhabitantRepository: IInhabitantRepository) {
    this._inhabitantRepository = inhabitantRepository;
  }

  /**
   * @brief 住民情報リスト取得
   * @returns 住民情報リスト
   */
  execute(): Array<Inhabitant> {
    const inhabitants = this._inhabitantRepository.findAll();
    return inhabitants;
  }
}
