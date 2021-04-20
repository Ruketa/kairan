//import { shallowMount } from "@vue/test-utils";
import { Inhabitant } from "@/Domain/Inhabitant";

test("set family name", () => {
  const inhabitant = new Inhabitant("kurihara");
  expect(inhabitant.family_name).toMatch("kurihara");
});
