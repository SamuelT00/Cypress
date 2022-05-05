/// <reference types="cypress" />

it('Akademia testing aplikacie', () => {
    test();
});

function test() {
    cy.visit("/"); 


    cy.contains("Accept").first().click();

    cy.contains("Log in").first().click();

    cy.get('input').first().type("Hello@gmail.com");
}