import { FamilyRepository } from "@/Frontend/Adapter/repository/FamilyRepository";
import { FamilyGateway } from "@/Frontend/Adapter/gateway/FamilyGateway";
import { Family } from "@/Frontend/Domain/Family";
import { APIConfiguration } from "@/Frontend/configuration";
import { ListFamilies } from "@/Frontend/UseCase/ListFaimlies";

export class FamilyController {
  _familyRepository!: FamilyRepository;

  constructor() {
    const gateway = new FamilyGateway(APIConfiguration.APIURL);
    this._familyRepository = new FamilyRepository(gateway);
  }

  fetchFamiliesData(): Promise<Family[]> {
    console.log("class: FamilyController => fetchFamiliesData is called");

    const families = new ListFamilies(this._familyRepository);
    const result = families
      .execute()
      .then((family_list: Array<Family>) => {
        return family_list;
      })
      .catch((err: any) => {
        console.log("error in fetch families data");
        return [];
      });
    return result;
  }
}
