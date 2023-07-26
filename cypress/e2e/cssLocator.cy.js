describe('My new  cy proj', function()  {

    it('verify the title', function() {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
        cy.get('#user-name').type('standard_user')
        cy.get("#password").type('secret_sauce')
        cy.get("[type='submit']").click()

        //wait for new page
        //cy.url().should('include', 'https://www.saucedemo.com/inventory.html');

        //validate 
        cy.contains('Products').should('be.visible');

        //add a item 1
        cy.get('#add-to-cart-sauce-labs-backpack').click()

        //add a item 2
        cy.get('#add-to-cart-sauce-labs-bike-light').click()

        //select cart 
        cy.get('.shopping_cart_link').click()

        //validate cart page
        cy.contains('Your Cart').should('be.visible');

        //check oue selected items cart_list
        cy.get('.cart_item').should('have.length', 2);

        //remove item
        cy.get('#remove-sauce-labs-bike-light').click()

        //check the removed item is invisible from the list
        cy.get('.cart_item').should('have.length', 1);

        //click on checkout btn
        cy.get('#checkout').click()

        //validate the checkout page
        cy.contains('Checkout: Your Information').should('be.visible');

        cy.get('#first-name').type('Ashani')
        cy.get('#last-name').type('Maleesha')
        cy.get('#postal-code').type(12530)

        //click on continue
        cy.get('#continue').click()

        //validate overview page
        cy.contains('Checkout: Overview').should('be.visible');
        cy.contains('Payment Information').should('be.visible');
        cy.contains('Shipping Information').should('be.visible');
        cy.contains('Price Total').should('be.visible');
        cy.contains('Total').should('be.visible');

        //click on finish button
        cy.get('#finish').click()

        //checkout complete
        cy.contains('Checkout: Complete!').should('be.visible');
        cy.contains('Thank you for your order!').should('be.visible');
})
})
