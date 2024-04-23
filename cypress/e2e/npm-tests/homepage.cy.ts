/// <reference types="cypress" />

describe("Home page", ()=>{
    before("Navigate to npm home page", ()=>{
        cy.visit(Cypress.env("BASE_URL"), { failOnStatusCode: false });
    })

    it("Verify correct address", ()=>{
        cy.get('#nav-docs-link').click()
    })
})