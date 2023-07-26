describe('my test suite',function(){

   /* //direct access
    it('FixturesDemoTest',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.fixture('orangeHRM.json').then( (data)=>{

            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
    
            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', data.expexted) 

        })

       

    })*/

    //access through Hook- for multiple it blocks
    let userdata;
    before(function(){
        cy.fixture('orangeHRM.json').then((data)=>{
            userdata=data;
        })
    })
    it('FixturesDemoTest2',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/') 
            cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()
    
            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', userdata.expexted) 

    })
})