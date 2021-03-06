import { Inhabitant } from "@/Frontend/Domain/Inhabitant";
import { TownCommunityRole } from "@/Frontend/Domain/TownCommunityRole";
import { ListInhabits } from "@/Frontend/UseCase/ListInhabits";
import { IInhabitantRepository } from "@/Frontend/UseCase/repository/IInhabitantRepository"; //"@/Frontend/UseCase/repository/IInhabitantRepository";

// dummy repository class for test
class InhabitantRepository_Dummy extends IInhabitantRepository {
  private _Inhabitants_memory!: Array<Inhabitant>;

  constructor() {
    super();
    this._Inhabitants_memory = new Array<Inhabitant>();
  }

  private createInhabitant(family_name: string) {
    const role = new TownCommunityRole("");
    const inhabitant = new Inhabitant(family_name, role);
    return inhabitant;
  }

  findAll(): Array<Inhabitant> {
    return this._Inhabitants_memory;
  }

  persist(inhabitant: Inhabitant): Inhabitant {
    this._Inhabitants_memory.push(inhabitant);
    return inhabitant;
  }
}

//// test cases

describe("ListInhabits", () => {
  test("repository is empty", () => {
    const addInh = new ListInhabits(new InhabitantRepository_Dummy());
    const inhs = addInh.execute();
    expect(inhs.length).toBe(0);
  }),
    test("executing find all inhabitants from repository", () => {
      const repo = new InhabitantRepository_Dummy();
      const role = new TownCommunityRole("");
      repo.persist(new Inhabitant("kurihara", role));
      repo.persist(new Inhabitant("tamura", role));

      const addInh = new ListInhabits(repo);
      const inhs = addInh.execute();
      expect(inhs[0].family_name).toMatch("kurihara");
      expect(inhs[1].family_name).toMatch("tamura");
      expect(repo.findAll().length).toBe(2);
    });
});
