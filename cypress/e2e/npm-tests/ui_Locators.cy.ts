// /// <reference types="cypress" />

// let data:any;

// beforeEach("load fixture data", function() {
//     cy.fixture('fillOutForms.json').then((fixtureData) => {
//       this.data = fixtureData;
//     });
//   });

// describe("Cypress element locators", () => {
//     beforeEach("Navigate to npm home page", () => {
//         cy.log(`UI_BASE_URL: ${Cypress.env("UI_BASE_URL")}`);
//         cy.visit(Cypress.env("UI_BASE_URL"), { failOnStatusCode: false });
        
//     });

//     it("Verify home page URL", () => {
//         cy.url().should('equal', Cypress.env("UI_BASE_URL"))
//     });

//     it("smoke: element capturing", ()=>{
//         cy.get('.et_pb_text_inner > ul').within(()=>{
//             cy.get('li').eq(0).contains('Big page with many elements')
//             cy.get('li > a').eq(1).should('have.attr', 'href', '../fake-landing-page');
//         })
//     })

//     it("dynamic testing using fixtures", function() {
//         cy.get('li > a').filter(':contains("Fill out forms")').should('have.attr', 'href', 'https://ultimateqa.com/filling-out-forms/').click();
//         cy.url().should('equal', Cypress.env("UI_BASE_URL"))
//         cy.log(this.data.company);
//         cy.log(this.data.contact_name);
//         cy.log(this.data.contact_email);
//       });

// });