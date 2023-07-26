/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
describe('my xpath test', function(){
    it('verify the no of products', function(){
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
        cy.get('#user-name').type('standard_user')
        cy.get("#password").type('secret_sauce')
        cy.get("[type='submit']").click()

        //validate 
        cy.contains('Products').should('be.visible');

        cy.xpath("//div[@class='inventory_list']/div").should('have.length',6)

    })

    it('chained xpath', function(){
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
        cy.get('#user-name').type('standard_user')
        cy.get("#password").type('secret_sauce')
        cy.get("[type='submit']").click()

        //validate 
        cy.contains('Products').should('be.visible');

        cy.xpath("//div[@class='inventory_list']").xpath("./div").should('have.length',6)

    })


})