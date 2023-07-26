describe('login', function(){
    it('implicit',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        //lets use should keyword

        //validate the url of new page
       // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //validate complete url
       // cy.url().should('include','orangehrmlive.com') //validate partial of the url
       // cy.url().should('contain','opensource-demo') //validate partial of the url

       /*cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //validate complete url
       .should('include','orangehrmlive.com') //validate partial of the url
       .should('contain','opensource-demo') //validate partial of the url*/

       cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //validate complete url
       .and('include','orangehrmlive.com') //validate partial of the url
       .and('contain','opensource-demo') //validate partial of the url
       .and('not.contain','openuni')

       cy.title().should('eq','OrangeHRM')
       .and('include','Orange')
       .and('contain','HRM')
       .and('not.contain','HRA')

       //validate the logo visibility
       cy.get('.orangehrm-login-branding > img').should('be.visible')
       cy.get('.orangehrm-login-branding > img').should('exist')   

       //validate the no of links
       cy.xpath("//a").should('have.length','5')

       //login
       cy.get("input[placeholder='Username']").type('Admin')
       cy.get("input[placeholder='Username']").should('have.value','Admin')  //check the provided value is the correct value
    })
})