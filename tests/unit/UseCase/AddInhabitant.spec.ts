import { Inhabitant } from "@/Domain/Inhabitant"
import { AddInhabitant } from "@/UseCase/AddInhabitant"
import { IInhabitantRepository } from "@/UseCase/repository/IInhabitantRepository"

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

describe("AddInhabintant", ()=>{
  test("execute to add", ()=>{
    let addInh = new AddInhabitant(new InhabitantRepository_Dummy())
    const inh = addInh.execute("kurihara")
    expect(inh.family_name).toMatch("kurihara")
  }),

  test("executing add an inhabitant to repository", ()=>{
    let repo = new InhabitantRepository_Dummy()
    let addInh = new AddInhabitant(repo)
    const inh = addInh.execute("kurihara")
    expect(inh.family_name).toMatch("kurihara")
    expect(repo.findAll().length).toBe(1)
  }),

 test("executing add inhabitants to repository", ()=>{
    let repo = new InhabitantRepository_Dummy()
    let addInh = new AddInhabitant(repo)
    let inh = addInh.execute("kurihara")
    expect(inh.family_name).toMatch("kurihara")

    inh = addInh.execute("tamura")
    expect(inh.family_name).toMatch("tamura")

    let inhs = repo.findAll()
    expect(inhs[0].family_name).toMatch("kurihara")
    expect(inhs[1].family_name).toMatch("tamura")
    expect(inhs.length).toBe(2)
  })
})