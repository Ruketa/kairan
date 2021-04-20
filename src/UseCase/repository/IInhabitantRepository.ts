import { Inhabitant } from "@/Domain/Inhabitant";

export abstract class IInhabitantRepository {
  abstract findAll(): Array<Inhabitant>;
  abstract persist(inhabitant: Inhabitant): Inhabitant;
}
