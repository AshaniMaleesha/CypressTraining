describe('My First Test', () => 
{
  it('Test1-verify title-positive test', () => {

    cy.visit("https://www.google.com")

    cy.title().should('eq','Google1')
  
  })

  it('Test1-verify title-positive test', () => {

    cy.visit("https://www.google.com")

    cy.title().should('eq','Google')
  
  })
})