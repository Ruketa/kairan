export class Inhabitant{
  private _id!: number;
  private _family_name!: string;

  constructor(family_name:string){
    this._family_name = family_name
  }

  set family_name(name:string){
    this._family_name = name;
  }

  get family_name():string {
    return this._family_name;
  }

}