Cypress.Commands.add("openPage", (name) => {
    cy.setCookie("token", "kgyibagkjfb&kDAFK");
    cy.visit("https://demoblaze.com/");
})