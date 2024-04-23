/// <reference types="cypress" />

describe("Home page", () => {
  before("Navigate to npm home page", () => {
    cy.visit(Cypress.env("BASE_URL"), { failOnStatusCode: false });
  });

  it("Verify correct address", () => {
    cy.get("#nav-docs-link").click();
    cy.go("back").then(() => {
      cy.get('input[type="search"]').clear().type("cypress").click();
      cy.get('ul[aria-label="Search results"]', { timeout: 10000 }).contains('cypress-split').click()
      cy.url().should('have.string','https://www.npmjs.com/package/cypress-spli')
    });
  });
});
