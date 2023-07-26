class login{

    txtUsername="input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    btnLogin="button[type='submit']";
    txtDashboadverify=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";


    setUsername(username){
        cy.get(this.txtUsername).type(username)
    }
    setPassword(password){
        cy.get(this.txtPassword).type(password)
    }
    clickLoginbtn(){
        cy.get(this.btnLogin).click()
    }
    
    verifyDashboadmsg(){
        cy.get(this.txtDashboadverify).should('have.text', 'Dashboard')
    }
}
export default login;