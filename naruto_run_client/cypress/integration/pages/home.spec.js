describe('Testing The Home Page', () => {
    it('Should go to the home page', () => {
      cy.visit('/posts')
      cy.contains('Home').click()
      cy.url().should('include', '/')
    })

    it('should render the home page', () => {
      cy.contains('Home').click()
      cy.root().should('contain', 'Welcome')
    })
  })