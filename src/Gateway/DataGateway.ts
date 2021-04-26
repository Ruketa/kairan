import { IDataGateway } from "@/Adapter/gateway/IDataGateway" 

export class APIGateway extends IDataGateway{

  private baseURI !: string;

  constructor(){
    super()
    this.baseURI = "http://localhost:5000"
  }

  FetchInhabitantList(){
    fetch(this.baseURI + '/predict',{
      method: 'GET',
      mode: 'cors',
      headers:{
        'content-type': 'application/json',
      },
    }).then(response=>{
      console.log(response.status)
      console.log(response.text())
    })
  }
}
