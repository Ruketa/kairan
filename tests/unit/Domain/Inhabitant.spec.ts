import { Inhabitant } from "@/Domain/Inhabitant";
import { TownCommunityRole } from "@/Domain/TownCommunityRole";

describe("Inhabitant.vue", () => {
  test("set family name", () => {
    const role = new TownCommunityRole("");
    const inh = new Inhabitant("kurihara", role);
    expect(inh.family_name).toMatch("kurihara");
  }),
    test("change family name", () => {
      const role = new TownCommunityRole("");
      const inh = new Inhabitant("kurihara", role);
      inh.family_name = "tamura";
      expect(inh.family_name).toMatch("tamura");
    });
});
