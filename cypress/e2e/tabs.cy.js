describe('handle tabs',function(){

    it.skip('appr01',function(){
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click()
        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new')
        cy.go('back');
    })

    it('appr02',function(){
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get("a[href='/windows/new']").then((e)=>{
            let url=e.prop('href')

            cy.visit(url)
        })
        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new')
        cy.go('back');
    })
})