describe('test suite',function(){
    it('take ss & videos',function(){
        cy.visit('https://demo.opencart.com/')
        
        /*cy.screenshot('homePage');
        cy.wait(5000)
        cy.get(".btn.btn-inverse.btn-block.dropdown-toggle").screenshot('logo');
        cy.wait(5000)*/

        //automatically get ss&videos when our test fail-this happen only we execute test using CLI OR TERMINAL

        cy.get(':nth-child(7) > .nav-link').click()
        cy.get("div[id='content'] h2").contains('Tablets')

        })
})