import {
  FamilyJson,
  IFamilyGateway,
} from "@/Frontend/UseCase/gateway/IFamilyGateway";
import { json } from "express";

export class FamilyGateway extends IFamilyGateway {
  private _ApiUrl: string;

  /**
   * コンストラクタ
   */
  constructor(url: string) {
    super();
    this._ApiUrl = url;
  }

  findAll(): Promise<Array<FamilyJson>> {
    console.log("class : FamilyGateway => findAll is called");
    console.log("fetch " + this._ApiUrl + "/families");

    return this.GetData(this._ApiUrl + "/families").then((res: Array<any>) => {
      return this.ConvertToFamilyJson(res);
    });
  }

  private ConvertToFamilyJson(jsons: Array<any>): Array<FamilyJson> {
    const familiyJsons = new Array<FamilyJson>();
    for (let i = 0; i < jsons.length; i++) {
      familiyJsons.push({
        id: jsons[i].id,
        family_name: jsons[i].family_name,
        description: jsons[i].description,
        icon_url: jsons[i].icon,
      });
    }
    return familiyJsons;
  }

  private async GetData(url: string): Promise<any> {
    console.log("GetData is called");
    const fetch_response = await fetch(url, { method: "GET", mode: "cors" });
    const json_data = await fetch_response.json();
    console.log(json_data);
    return json_data;
  }
}
