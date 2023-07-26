describe('navigation pages',function(){

    it('navigation test',function(){
        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq','Your Store')//validate the home page

        cy.get(':nth-child(7) > .nav-link').click()
        cy.get("div[id='content'] h2").contains('Cameras')//vaidate the cameras page

        cy.go('back')
        cy.title().should('eq','Your Store') //home page
        cy.go('forward')
        cy.get("div[id='content'] h2").contains('Cameras')//cameras page
        cy.go(-1)
        cy.title().should('eq','Your Store')//home
        cy.go(1)
        cy.get("div[id='content'] h2").contains('Cameras')//cameras
        cy.reload()
    })
})