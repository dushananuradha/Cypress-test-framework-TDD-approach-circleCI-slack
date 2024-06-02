/// <reference types="cypress" />

import { NPM_HomePage } from "../../pageObjects/UI/npmHome";

const npmHome = new NPM_HomePage();
let searchText: string = "cypress";

beforeEach("Navigate to npm home page", () => {
  cy.visit(Cypress.env("BASE_URL"), { failOnStatusCode: false });
});

describe("Home page Interaction", () => {

  it("Should be directed to npm home page",()=>{
    cy.url().should("equal", "https://www.npmjs.com/");
  });

  it("Should be able to search and find npm packages in home page", () => {
    npmHome.type_packageToSearch(searchText);
    npmHome.click_search();
    cy.wrap(npmHome.click_exactSearchResult(searchText)).then(() => {
      cy.url().should("equal", "https://www.npmjs.com/package/cypress");
    });
  });
});
