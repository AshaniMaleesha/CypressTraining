describe('My First Test', () => 
{
  it('Test1-verify title-positive test', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/")

    cy.title().should('eq','OrangeHRM')
  
  }
  )

  it('Test2-verify title-negative test', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/")

    cy.title().should('eq','OrangeHRM123')
  
  }
  )

}
)