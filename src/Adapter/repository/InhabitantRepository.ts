import { Inhabitant } from "@/Domain/Inhabitant";
import { IInhabitantRepository } from "@/UseCase/repository/IInhabitantRepository"

/*
* ToDo 永続化は保留で仮実装
*/
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
    let inhabitants !: Array<Inhabitant>;
    inhabitants.push(this.createInhabitant("kurihara"))
    return inhabitants[0] 
  }

}