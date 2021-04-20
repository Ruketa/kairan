import { Inhabitant } from "@/Domain/Inhabitant";
import { ListInhabits } from "@/UseCase/ListInhabits";
import { IInhabitantRepository } from "@/UseCase/repository/IInhabitantRepository";

// dummy repository class for test
class InhabitantRepository_Dummy extends IInhabitantRepository {
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
      repo.persist(new Inhabitant("kurihara"));
      repo.persist(new Inhabitant("tamura"));

      const addInh = new ListInhabits(repo);
      const inhs = addInh.execute();
      expect(inhs[0].family_name).toMatch("kurihara");
      expect(inhs[1].family_name).toMatch("tamura");
      expect(repo.findAll().length).toBe(2);
    });
});
