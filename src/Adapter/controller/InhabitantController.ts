import { InhabitantRepository } from "@/Adapter/repository/InhabitantRepository"
import { ListInhabitans } from "@/UseCase/ListInhabits"
import { AddInhabitant } from "../UseCase/AddInhabitant"

export class InhabitantController{
  private _inhabitantRepository !: InhabitantRepository

  constructor(){
    this._inhabitantRepository = new InhabitantRepository()
  }

  findAllInhabitans(){
    const useCase = new ListInhabitans(this._inhabitantRepository);
    return useCase.execute()
  }

  addInhabitants(family_name: string){
    const useCase = new AddInhabitant(this._inhabitantRepository) ;
    return useCase.execute(family_name)
  }
}