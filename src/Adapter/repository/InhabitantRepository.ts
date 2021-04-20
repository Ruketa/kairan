import { Inhabitant } from "@/Domain/Inhabitant";
import { IInhabitantRepository } from "@/UseCase/repository/IInhabitantRepository";

/*
 * ToDo 永続化は保留で仮実装
 */
export class InhabitantRepository extends IInhabitantRepository {
  private _Inhabitants_memory!: Array<Inhabitant>;

  constructor() {
    super();
    this._Inhabitants_memory = new Array<Inhabitant>();
  }

  private createInhabitant(family_name: string) {
    const inhabitant = new Inhabitant(family_name);
    return inhabitant;
  }

  findAll(): Array<Inhabitant> {
    this._Inhabitants_memory.push(this.createInhabitant("kurihara"));
    return this._Inhabitants_memory;
  }

  persist(inhabitant: Inhabitant): Inhabitant {
    this._Inhabitants_memory.push(inhabitant);
    return inhabitant;
  }
}
