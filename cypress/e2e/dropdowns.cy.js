describe('dropdowns handling', function(){

    it('select tag', function(){

        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country')
        .select('Italy').should('have.value','Italy')
        
    })

    it('dropdown without select tag', function(){ //bootsrap dropdown, no select tag , in run time it load the options after select it

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get("input[role='combobox']").type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Italy')
    })

    it('auto suggested dropdown', function(){ 

        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi Metro').click()
       
    })

      it('dynamic dropdown', function () {
        // Visit Google and search for "cypress automation"
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('cypress automation')
        cy.wait(3000)
        
        // Find the dynamic dropdown and select "cypress automation tutorial"
        cy.get('div.wM6W7d>span')
          .each(($el, index, $list) => {
            if ($el.text() === 'cypress automation tutorial') {
              cy.wrap($el)
                .as('dropdownOption')
                .click()
            }
          })
      
       
      })
      
      
      
      
})