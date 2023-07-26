/// <reference types="Cypress"/>
describe('handle the alerts', function(){
    it.skip('js alerts', function(){

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        //alert is automaticaly closed the alert window

        cy.get('#result').should('have.text','You successfully clicked an alert')
        
    })

    it('confirm alerts-ok btn', function(){

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })

        //alert is automaticaly closed the alert window by using OK btn

        cy.get('#result').should('have.text','You clicked: Ok')
        
    })

    it('confirm alerts-cancel btn', function(){

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm',()=>false);

        cy.get('#result').should('have.text','You clicked: Cancel')
        
    })

    it('prompt alerts', function(){

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })
       cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text','You entered: welcome')
        
    })

  /*  it('prompt alerts', function(){
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(''); // Simulate clicking OK by returning an empty string
          });

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        
       cy.get("button[onclick='jsPrompt()']").click()
     
        cy.get('#result').should('have.text','You entered: ')
        
    })

    it('should click OK in prompt alert', () => {
        cy.window().then((win) => {
          cy.stub(win, 'prompt').returns(''); // Simulate clicking OK by returning an empty string
        });
      
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
      
        // Perform the action that triggers the prompt alert
        cy.get("button[onclick='jsPrompt()']").click();
      
        // Assertion or further actions after clicking OK in the prompt alert
        // ...
      });

      it.only('should click OK in prompt alert', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
      
        // Perform the action that triggers the prompt alert
        cy.get("button[onclick='jsPrompt()']").click();
      
        // Use the custom command to handle the prompt alert
        cy.handlePrompt();
      
        // Assertion or further actions after clicking OK in the prompt alert
        // ...
      })*/

      //approach01
      it('auth alerts', function(){
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{
            username:"admin",
            password:"admin"
        }});

        cy.get("div[class='example'] p").should('have.contain',"Congratulations!")

      })

      //approach02
      it.only('auth alertss', function(){
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain',"Congratulations!")

      })
    })