import { Region } from "@/Frontend/Domain/Region";

export abstract class IRegionRepository {
  abstract findAll(): Array<Region>;
  abstract persist(region: Region): Region;
}
