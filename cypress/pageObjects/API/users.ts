import { APIRequest } from "../API/globalAPIS";
import { userJSON } from "../API/user_data";

const user_payload = userJSON;
let request = new APIRequest();
let apiPath: string = "";
let getUserPage: string = "/?page=2";
let body: any = null;

export class userAPI {
  public getUsers() {
    let apiPath: string = `${getUserPage}`;

    request.GET(apiPath, body).then((res: any) => {
      console.log("retrieved: ", res);
      expect(res.status).to.eq(200);
    });
    return this;
  }

  public createUser() {
    request.POST(apiPath, user_payload).then((res: any) => {
      expect(res.status).to.eq(200);
    });
    return this;
  }
}
