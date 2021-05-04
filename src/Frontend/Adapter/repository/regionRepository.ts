import { Region } from "@/Frontend/Domain/Region";
import { IRegionRepository } from "@/Frontend/UseCase/repository/IRegionRepository";

/*
 * ToDo 永続化は保留で仮実装
 */
export class RegionReopsitory extends IRegionRepository {
  private _region_memory!: Array<Region>;

  constructor() {
    super();
    this._region_memory = new Array<Region>();

    this._region_memory.push(new Region("north region"));
    this._region_memory.push(new Region("south region"));
  }

  findAll(): Array<Region> {
    return this._region_memory;
  }

  persist(region: Region): Region {
    this._region_memory.push(region);
    return region;
  }
}
