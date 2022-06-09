/// <reference types="cypress" />

beforeEach(() => {
    cy.visit("/");
});

describe("Test set for academy", () => {
    it('Akademia ukážka go();', () => { 
        cy.visit("/index.php?id_category=5&controller=category")

        cy.wait(2000)
        cy.go("back")
        //cy.go(-1)

        cy.wait(2000)
        cy.go("forward")
        //cy.go(1)

        cy.get('#header_logo').find("img").click().wait(2947).debug()
        
    });
});