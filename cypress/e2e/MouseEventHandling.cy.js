/// <reference types="Cypress"/>
import 'cypress-iframe';
import '@4tw/cypress-drag-drop'

describe('Mouse event handling',function(){
    it('Mouse hover action',function(){
        cy.visit('https://demo.opencart.com/')

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible')
        })

    it('right click ', function(){
        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')

        /*
        //approach 1 using trigger method
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        cy.get('.context-menu-icon-copy > span').should('be.visible')
        */

        //aproach 2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-icon-copy > span').should('be.visible')
    })
    it('double click action',function(){
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult')//switch to this particular iframe


        //approach1 - trigger method
        //cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
       // cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')

        //aproach2 - dblclick method
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')

    })

    it('drag and drop using plugin',function(){
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').drag('#box106',{force:true});

    })

    it.only('scrolling the page',function(){
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
        cy.get(':nth-child(2) > tbody > :nth-child(72) > :nth-child(1) > img').scrollIntoView({duration:3000})
        cy.get(':nth-child(2) > tbody > :nth-child(72) > :nth-child(1) > img').should('be.visible')
        cy.get(':nth-child(1) > tbody > :nth-child(19) > :nth-child(1) > img').scrollIntoView({duration:3000})
        cy.get(':nth-child(1) > tbody > :nth-child(19) > :nth-child(1) > img').should('be.visible')

        cy.get('#footer').scrollIntoView({duration:3000})
        cy.get("a[href='privacy-and-disclaimer.html']").should('be.visible')
    })

})