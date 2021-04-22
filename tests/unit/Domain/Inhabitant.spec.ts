import { Inhabitant } from "@/Domain/Inhabitant"
import Domain from "@/Domain/Inhabitant.vue"

describe("Inhabitant.vue", ()=>{
  test("set family name", ()=>{
    let inh = new Inhabitant("kurihara");
    expect(inh.family_name).toMatch('kurihara');
  }),

  test("change family name", ()=>{
    let inh = new Inhabitant("kurihara");
    inh.family_name = "tamura"
    expect(inh.family_name).toMatch('tamura');
  })
})