describe('Test login', () => {
    it('Should go to the login page', () => {
      cy.visit('/')
      cy.contains('Login').click()
      cy.url().should('include', '/login')
    })
  })