/// <reference types="cypress" />

import {userAPI} from "../../pageObjects/API/users";

let user = new userAPI();

describe("User APIs", ()=>{

    before("Navigate to npm home page", () => {
        cy.visit(Cypress.env("BASE_URL"), { failOnStatusCode: false });
      });

    it("verify get users", ()=>{
        user.getUsers();
        // user.createUser();
    });
});