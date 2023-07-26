import login from "../PageObjects/loginPage2"

describe('my test suite',function(){
    //using pom
    it('login',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        const lgin=new login();
        lgin.setUsername('Admin');
        lgin.setPassword('admin123');
        lgin.clickLoginbtn()
        lgin.verifyDashboadmsg();
    })

    //using pom with fixtures-Data driven testing
    it.only('login',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.fixture('orangeHRM').then((data)=>{

            const lgin=new login();
            lgin.setUsername(data.username);
            lgin.setPassword(data.password);
            lgin.clickLoginbtn()
            lgin.verifyDashboadmsg();

        })
       
    })


})