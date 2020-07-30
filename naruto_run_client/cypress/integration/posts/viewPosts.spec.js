describe('Test View Posts', () => {
    it('Should go to the view posts page', () => {
      cy.visit('/')
      cy.contains('All Posts').click()
      cy.url().should('include', '/posts')
    })

    it('should render all of the posts', () => {
      cy.contains('All Posts').click()
      cy.root().should('contain','Pre Tech Job')
        .should('contain', 'Current Tech Job')
    })
  })