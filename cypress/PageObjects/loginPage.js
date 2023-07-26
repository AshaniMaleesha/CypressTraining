class login{

    setUsername(username){
        cy.get("input[placeholder='Username']").type(username)
    }
    setPassword(password){
        cy.get("input[placeholder='Password']").type(password)
    }
    clickLoginbtn(){
        cy.get("button[type='submit']").click()
    }
    
    verifyDashboadmsg(){
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    }
}

export default login;