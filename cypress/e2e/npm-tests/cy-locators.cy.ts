/// <reference types="cypress" />

describe("Cypress element locators", () => {
    before("Navigate to npm home page", () => {
        cy.visit(Cypress.env("UI_BASE_URL"), { failOnStatusCode: false });
    });

    it("Verify home page URL", () => {
        cy.url().should('equal', Cypress.env("UI_BASE_URL"))
    });

});