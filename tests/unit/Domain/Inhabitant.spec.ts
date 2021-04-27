import { Inhabitant } from "@/Domain/Inhabitant";
import Domain from "@/Domain/Inhabitant.vue";

describe("Inhabitant.vue", () => {
  test("set family name", () => {
    const inh = new Inhabitant("kurihara");
    expect(inh.family_name).toMatch("kurihara");
  }),
    test("change family name", () => {
      const inh = new Inhabitant("kurihara");
      inh.family_name = "tamura";
      expect(inh.family_name).toMatch("tamura");
    });
});
