import { Region } from "@/Frontend/Domain/Region";
import { IRegionRepository } from "@/Frontend/UseCase/repository/IRegionRepository";

export class ListRegion {
  private _regionRepository!: IRegionRepository;

  constructor(regionRepository: IRegionRepository) {
    this._regionRepository = regionRepository;
  }

  /**
   * @brief 地区情報リスト取得
   * @returns 地区情報リスト
   */
  execute(): Array<Region> {
    const inhabitants = this._regionRepository.findAll();
    return inhabitants;
  }
}
