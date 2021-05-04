import { Region } from "@/Domain/Region";

export abstract class IRegionRepository {
  abstract findAll(): Array<Region>;
  abstract persist(region: Region): Region;
}
