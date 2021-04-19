import { Inhabitant } from "@/Domain/Inhabitant";
import { IInhabitantRepository } from "@/UseCase/repository/IInhabitantRepository"

export class InhabitantRepository extends IInhabitantRepository{

  constructor(){
    super();
  }

  private createInhabitant(family_name: string){
    let inhabitant = new Inhabitant(family_name);
    return inhabitant;
  }

  findAll(): Array<Inhabitant> {
    let inhabitants !: Array<Inhabitant>;
    inhabitants.push(this.createInhabitant("kurihara"))
    return inhabitants;
  }

  persist(inhabitant: Inhabitant): Inhabitant{
    return inhabitant 
  }

}