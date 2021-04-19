import { Inhabitant } from "@/Domain/Inhabitant"
import { IInhabitantRepository } from "@/UseCase/repository/IInhabitantRepository"

export class AddInhabitant {
  private inhabitantRepository: IInhabitantRepository

  constructor(inhabitantRepository: IInhabitantRepository){
    this.inhabitantRepository = inhabitantRepository
  }

  excute(family_name: string){
    let inhabitant = new Inhabitant(family_name);
    return this.inhabitantRepository.persist(inhabitant)
  }
}