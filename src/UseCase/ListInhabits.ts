import { Inhabitant } from "../Domain/Inhabitant";
import { IInhabitantRepository } from "../UseCase/repository/IInhabitantRepository";

export class ListInhabits {
  private _inhabitantRepository!: IInhabitantRepository;

  constructor(inhabitantRepository: IInhabitantRepository) {
    this._inhabitantRepository = inhabitantRepository;
  }

  execute(): Array<Inhabitant> {
    const inhabitants = this._inhabitantRepository.findAll();
    return inhabitants;
  }
}
