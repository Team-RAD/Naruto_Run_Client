describe('Testing About me page', () => {
    it('Should go to the about me page', () => {
      cy.visit('/')
      cy.contains('About').click()
      cy.url().should('include', '/about')
    })

    it('should render the about me page', () => {
      cy.contains('About').click()
      cy.root().should('contain', 'The Problem')
        .should('contain', 'The Solution')
    })
  })