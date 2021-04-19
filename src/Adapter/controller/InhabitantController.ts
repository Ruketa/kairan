import { InhabitantRepository } from "@/Adapter/repository/InhabitantRepository"
import { ListInhabitans } from "@/UseCase/ListInhabits"

export class InhabitantController{
  private inhabitantRepository !: InhabitantRepository

  constructor(){
    this.inhabitantRepository = new InhabitantRepository()
  }

  findAllInhabitans(){
    const useCase = new ListInhabitans();
  }
}