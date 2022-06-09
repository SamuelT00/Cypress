declare namespace Cypress {
    interface Chainable {
        openPage(name: string): Chainable<Element>
    }
}