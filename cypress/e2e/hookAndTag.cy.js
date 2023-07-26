
describe('Hook and Tag',function(){

    before(function(){
        cy.log("**** Launch App ****")
    })

    after(function(){
        cy.log("**** close App ****")
    })

    beforeEach(function(){
        cy.log("**** Login ****")
    })

    afterEach(function(){
        cy.log("**** Logout ****")
    })    

    it('search',function(){
        cy.log("**** search ****")

    })

    it('advanced search',function(){
        cy.log("**** advanced search ****")

    })

    it('listing products',function(){
        cy.log("**** listing products ****")

    })


})