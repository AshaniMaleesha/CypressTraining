const { assert } = require("chai")


describe('my nre seertion', function(){


it('explixit',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click()

    let expName="abcd";

   cy.get('.oxd-userdropdown-name').then( (x)=> {
        let actName=x.text()
        //BDD style
        expect(actName).to.equal(expName)
        expect(actName).to.not.equal(expName)

        //TDD Style
        assert.equal(actName,expName)
        assert.notEqual(actName,expName)
    })
})
})