import * as http from "http";

export class RequestHandler {
  static inhabitants(
    request: http.IncomingMessage,
    response: http.ServerResponse
  ): void {
    console.log("Request handler 'inhabitants' was called");

    response.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
    response.write({ value: "return value" });
    response.end();
  }

  static authorize(request: any, response: any): void {
    console.log("Request handler 'authorize' was called");
    response.send(JSON.stringify({ auth_result: true }));
    response.end();
  }
}
