/// <reference types="cypress" />

beforeEach(() => {
    cy.visit("/");
});

describe("Test set for academy",        {
    viewportHeight: 1080,
    viewportWidth: 1920,
  }, () => {
    it('Akademia testing aplikacie-1', () => { 
    
        cy.get('#header_logo').find("img")
        .should("be.visible")
        .should("have.attr", "src")
        .should("include", "http://automationpractice.com/img/logo.jpg")
        
        cy.get("#search_query_top")
        .should("be.visible")
        .type("xxxxxxxxxxxxxxxxxxxxxx {enter}")

        cy.get(".alert-warning")
        .should("be.visible")
        .should("contain.text", "No results were found for your search")

        cy.get('#header_logo').find("img")
        .click()


        cy.url().should('eq', 'http://automationpractice.com/index.php')

    });

    it('Akademia testing aplikacie-2', () => { 
    
        cy.get('.header_user_info').find(".login")
        .should("be.visible")
        .click()

        cy.get("#email")
        .should("be.visible")
        .type(Cypress.env('email'))

        cy.get("#passwd")
        .should("be.visible")
        .type(Cypress.env('passwd'))

        cy.get("#SubmitLogin")
        .should("be.visible")
        .click()

        cy.get(".info-account")
        .should("be.visible")
        .should("contain.text", "Welcome to your account. Here you can manage all of your personal information and orders.")

        cy.get(".shopping_cart").find("a").eq(0)
        .click()

        cy.get("#step_end")
        .should("be.visible")
        .should("contain.text", "Payment")

        cy.get(".logout")
        .should("be.visible")
        .click().should("not.exist")


    });

    it('Akademia testing aplikacie-3', () => { 
    
        cy.get('.ajax_block_product').eq(3).find("img")                //Kliknúť na 4. obrázok => {Očakávam že sa mi otvorí iframe s detailnými informáciami o šatách}
        .should("be.visible")
        .click()

        cy.wait(10000)

        getIframeAndClick('.fancybox-iframe', ".exclusive")                    //Kliknúť na button (Add to cart) => {Očakávam že sa dané šaty pridajú do košíka a ukáže sa mi ďalšie okno}

        cy.get('a[href="http://automationpractice.com/index.php?controller=order"]').eq(2).click()         //Kliknúť na button (Proceed to checkout) => {Očakávam že ma to presmeruje na stránku so všetkými mojími objebnávami}

        cy.get(".icon-trash").click()                                  //Kliknúť na X (Krížik) => {Očakávam že sa daná objednávka odstráni z košíka a vypíše sa "Your shopping cart is empty."}

        cy.get(".alert-warning")
        .should("contain.text", "Your shopping cart is empty.")
    });

    it('Akademia testing aplikacie-4', () => { 

        cy.get('.header_user_info').find(".login")      //Kliknúť na button (login) => {Očakávam že ma to presmeruje na prihlasovaciu stránku}
        .should("be.visible")
        .click()

        cy.get("#email")                                //Do poľa na email vložiť email => {Očakávam že to políčko ostane vyplnené danými údajmi}
        .should("be.visible")
        .type(Cypress.env('email'))

        cy.get("#passwd")                              //Do poľa na password vložiť heslo => {Očakávam že to políčko ostane vyplnené danými údajmi}
        .should("be.visible")
        .type(Cypress.env('passwd'))

        cy.get("#SubmitLogin")                         //Kliknúť na button (Sign in) => {Očakávam že ma to prihlási a vypíše že prihlásenie bolo úspešné}
        .should("be.visible")
        .click()

        cy.get(".info-account")
        .should("be.visible")
        .should("contain.text", "Welcome to your account. Here you can manage all of your personal information and orders.")

        cy.get('#header_logo').find("img")              //Kliknúť na logo => {Očakávam že ma to presmeruje na hlavnú stránku}
        .click()
    
        cy.get('.ajax_block_product').eq(3).find("img") //Kliknúť na 4. obrázok => {Očakávam že sa mi otvorí iframe s detailnými informáciami o šatách}
        .should("be.visible")
        .click()

        cy.wait(8000)                                               

        getIframeAndClick('.fancybox-iframe', "#wishlist_button")       //Kliknúť na (Add to wishlist) => {Očakávam že sa mi to pridá do whishlistu}
        
        cy.get(".fancybox-close").eq(0)                                //Kliknúť na X => {Očakávam že sa mi zatvorí daný iframe}
        .click()

        cy.get(".account")                                             //Kliknúť na button s uživatelským menom => {Očakávam že sa mi otvorí stránka s mojím účtom}
        .should("be.visible")
        .click()

        cy.get(".lnk_wishlist")                                        //Kliknúť na button (My wishlists) => {Očakávam že sa mi otvorí stránka s wishlistom}
        .should("be.visible")
        .click()

        cy.get(".icon-remove").click()                                 //Kliknúť na X => {Očakávam že sa odoberiú dané šaty z wishlistu}
    });

    it.only('Akademia testing aplikacie-4', () => { 
        cy.get('.header_user_info').find(".login")
        .should("be.visible")
        .click()

        cy.get("#email")
        .should("be.visible")
        .fill(Cypress.env('email'))

        cy.get("#passwd")
        .should("be.visible")
        .fill(Cypress.env('passwd'))
    });
    
});

function getIframeAndClick($frame, $findElement){
    cy.get($frame).then($iframe => {
        const doc = $iframe.contents()

        cy.wrap(doc.find($findElement)).click({force: true})
    })
}