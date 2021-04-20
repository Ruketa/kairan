import { Inhabitant } from "@/Domain/Inhabitant";
import { IInhabitantRepository } from "@/UseCase/repository/IInhabitantRepository";

export class AddInhabitant {
  private inhabitantRepository: IInhabitantRepository;

  constructor(inhabitantRepository: IInhabitantRepository) {
    this.inhabitantRepository = inhabitantRepository;
  }

  execute(family_name: string) {
    const inhabitant = new Inhabitant(family_name);
    return this.inhabitantRepository.persist(inhabitant);
  }
}
