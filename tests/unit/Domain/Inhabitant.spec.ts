import { Inhabitant } from "@/Domain/Inhabitant";

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
