import { IFamilyGateway } from "@/Frontend/UseCase/gateway/IFamilyGateway";

class FamilyGateway extends IFamilyGateway{
  private _ApiUrl: string;

  /**
   * コンストラクタ
   */
  constructor(url: string){
    super();
    this._ApiUrl = url
  }

  findall(): Promise<boolean>{
    return fetch(this._ApiUrl, {
      method: "GET",
      mode: "cors"
    })
    .then((res: Response)=>{
      return res.json();
    })
    .then((json_data: any)=>{
      return !("error" in json_data);
    })
  }
}