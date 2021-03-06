import { InhabitantRepository } from "@/Frontend/Adapter/repository/InhabitantRepository";
import { ListInhabits } from "@/Frontend/UseCase/ListInhabits";
import { AddInhabitant } from "@/Frontend/UseCase/AddInhabitant";
import { Inhabitant } from "@/Frontend/Domain/Inhabitant";

export class InhabitantController {
  private _inhabitantRepository!: InhabitantRepository;

  constructor() {
    this._inhabitantRepository = new InhabitantRepository();
  }

  findAllInhabitans(): Array<Inhabitant> {
    const useCase = new ListInhabits(this._inhabitantRepository);
    return useCase.execute();
  }

  addInhabitants(family_name: string): Inhabitant {
    const useCase = new AddInhabitant(this._inhabitantRepository);
    return useCase.execute(family_name);
  }
}
