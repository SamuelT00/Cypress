/// <reference types="cypress" />

/*before(() => {
    cy.visit("/");
});
*/

describe("Test set for academy", () => {
    it('Akademia testing aplikacie', () => {
        cy.visit("/"); 
    
        cy.get('a[href="prod.html?idp_=1"] img').should("be.visible")
        cy.get('a[href="prod.html?idp_=1"]').should("have.length", 2)
        cy.get('a[href="prod.html?idp_=1"]').find("img")
        cy.get('a[href="prod.html?idp_=1"]').eq(1).should("have.text", "Samsung galaxy s6")
        cy.get(".hrefch").contains("Samsung galaxy s6").should("have.text", "Samsung galax ys6")

        cy.get('a[href="prod.html?idp_=1').then( task => {
            expect(task[0]).to.contain("")
            expect(task[1]).to.contain("")
        })
    });

    it.only('Akademia testing aplikacie ', () => {
        cy.visit("https://www.demoblaze.com/")
        
        cy.intercept("https://api.demoblaze.com/entries").as("Entries")

        cy.intercept("POST", "https://api.demoblaze.com/view").as("Samsung galaxy S6")

        cy.wait("@Entries").its("response.statusCode").should("eq", 200)

        cy.get("@Entries").then(code => {
            expect(code.response.statusCode).to.eq(200)
        })

        cy.intercept({
            method: "GET",
            url: "https://api.demoblaze.com/entries"
        }).as("Test page")

        
        cy.intercept({
            method: "POST",
            url: "https://api.demoblaze.com/entries",
            body: {
                name: "This is name"
            }
        }).as("Test page")

        
        cy.visit("hhttps://api.demoblaze.com/entries")


    });
    
});
