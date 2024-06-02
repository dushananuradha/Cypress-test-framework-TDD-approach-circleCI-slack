const usersBaseURL = "https://reqres.in/api/users";

let apiPath:string = `${usersBaseURL}`;
let body: any = null;
let headers: any = null;

export class APIRequest {

    public GET(apiPath, body, headers?: {}) {
        return cy.request({
            url: apiPath,
            body: body,
            headers:headers
        });
    }

    public POST(body, headers?: {}) {
        cy.log("apiPAth_create: ", apiPath)
        return cy.request({
            url: apiPath,
            body: body,
            headers:headers
        });
    }
}