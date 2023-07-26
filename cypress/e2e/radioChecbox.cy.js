/// <reference types="Cypress"/>
describe('check ui elements', function(){
   
   /* it('check radio buttons',function(){
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        //visibility of radio buttons
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

        //select the male radio button
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        //select the female radio button
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')
    })*/

    it('select checkboxes',function(){
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        //check the visibility
        //cy.get('#monday').should('be.visible')

        //select a single checkbox from a check box list-monday
        //cy.get('#monday').check().should('be.checked')

        //unselect the checked checkbox
        //cy.get('#monday').uncheck().should('not.be.checked')

        //select all checkboxes
        //cy.get("input.form-check-input[type$='checkbox']").check().should('be.checked')
        //unselect all
        //cy.get("input.form-check-input[type$='checkbox']").uncheck().should('not.be.checked')

        //select first and last checkboxes
        cy.get("input.form-check-input[type$='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type$='checkbox']").last().check().should('be.checked')

    })
})