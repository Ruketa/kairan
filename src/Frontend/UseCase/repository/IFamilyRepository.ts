import { Family } from "@/Frontend/Domain/Family";

export abstract class IFamilyRepository {
  abstract findAll(): Promise<Family[]>;
}
