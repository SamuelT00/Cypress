describe('Mailosaurus', () => {
    const serverId = 'nklhffef'; 
    const testEmail = `shaking-grain@nklhffef.mailosaur.net`

    it('Mailosaurus typescript test..', () => {

        cy.visit("/users/sign_up")

        cy.get('[name="user[first_name]"]')
        .type("Testing")

        cy.get('[name="user[last_name]"]')
        .type("1")

        cy.get('[name="user[email]"]')
        .type(testEmail)

        cy.get('[name="user[password]"]')
        .type("123456789")

        cy.get('[type="checkbox"]').check()

        cy.get('[type="submit"]')
        .click()

        cy.wait(10000)
        

        cy.request({
        method: 'POST',
        url: 'https://mailosaur.com/api/messages/search?server=nklhffef',
        headers: {
            authorization: 'Basic ' + Buffer.from("hzWIqSmzVBHyDyru").toString("base64")
        },
        body: {
            sentFrom: "noreply@notify.thinkific.com",
            sentTo: testEmail,
            subject: "Your Ultimate QA course details."
        }
        }).then(response => {
            expect(response.body.items[0].subject).equals("Your Ultimate QA course details.")
            console.log(response);
        })
          
        
        /*cy.mailosaurGetMessage(serverId, {
            sentTo: testEmail
        }).then(email => {
            //expect(email.subject).to.equal('Reset your password');
        })
    */
    })
    
})