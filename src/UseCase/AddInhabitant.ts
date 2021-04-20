import { Inhabitant } from "@/Domain/Inhabitant";
import { TownCommunityRole } from "@/Domain/TownCommunityRole";
import { IInhabitantRepository } from "@/UseCase/repository/IInhabitantRepository";

export class AddInhabitant {
  private inhabitantRepository: IInhabitantRepository;

  constructor(inhabitantRepository: IInhabitantRepository) {
    this.inhabitantRepository = inhabitantRepository;
  }

  /**
   * @brief 住民情報追加実行
   * @param {String}  family_name   [in]  家族名
   * @returns 住民情報
   */
  execute(family_name: string): Inhabitant {
    const inhabitant = new Inhabitant(family_name, new TownCommunityRole(""));
    return this.inhabitantRepository.persist(inhabitant);
  }
}
