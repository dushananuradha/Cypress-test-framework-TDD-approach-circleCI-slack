/// <reference types="cypress" />

describe("Cypress element locators", () => {
    beforeEach("Navigate to npm home page", () => {
        cy.visit(Cypress.env("UI_BASE_URL"), { failOnStatusCode: false });
    });

    it("Verify home page URL", () => {
        cy.url().should('equal', Cypress.env("UI_BASE_URL"))
    });

    it("element capturing", ()=>{
        cy.get('.et_pb_text_inner > ul').within(()=>{
            cy.get('li').eq(0).contains('Big page with many elements')
            cy.get('li > a').eq(1).should('have.attr', 'href', '../fake-landing-page');
        })
    })

});