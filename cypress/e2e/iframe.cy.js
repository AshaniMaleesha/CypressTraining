import 'cypress-iframe';
/// <reference types="Cypress"/>
describe('iframe',function(){
    it('handling iframe-approach1',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe')
       
        const iframe= cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);
      
        iframe.clear()
        cy.wait(3000)
        cy.iframe().type('Welcome {ctrl+a}'); 
        cy.get("button[title='Bold']").click()

    })

    it('handling iframe by using custom command-approach2',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe')
       
        cy.getIframe('#mce_0_ifr').clear()
        cy.wait(3000)
        cy.iframe().type('Welcome {ctrl+a}'); 
        cy.get("button[title='Bold']").click()

    })

    it.only('handling iframe by using cypress iframe plugin-approach2',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type('Welcome')
        
       
    })

     
})