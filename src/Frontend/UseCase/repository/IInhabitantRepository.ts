import { Inhabitant } from "@/Frontend/Domain/Inhabitant";

export abstract class IInhabitantRepository {
  abstract findAll(): Array<Inhabitant>;
  abstract persist(inhabitant: Inhabitant): Inhabitant;
}
