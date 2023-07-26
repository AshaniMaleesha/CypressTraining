//click on link using label
//over writing existing contains() command
//reusable custom command

describe('custom commands',function(){

   /* before('login', function() {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
        cy.get('#user-name').type('standard_user')
        cy.get("#password").type('secret_sauce')
        cy.get("[type='submit']").click()

      
    })*/

  /*  it('handling links',function(){
       
        //direct access-without any custom command
        //cy.get('#item_4_title_link > .inventory_item_name').click()

        //using custom command
        cy.clickLink("Sauce Labs Backpack")
        cy.get('.inventory_details_name').should('have.text','Sauce Labs Backpack')

    })*/

   /* it.only('over write',function(){
        cy.clickLink("SAUCE Labs Backpack")
        cy.get('.inventory_details_name').should('have.text','Sauce Labs Backpack')
    })*/

    it.only('Custom command for login',function(){

        cy.visit('https://www.saucedemo.com/')
        cy.loginApp("standard_user","secret_sauce")
    

    })
})