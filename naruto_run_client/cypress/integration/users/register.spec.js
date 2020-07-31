describe('Test register', () => {
    it('Should go to the register page', () => {
      cy.visit('/')
      cy.contains('Register').click()
      cy.url().should('include', '/register')
    })
    
    it('should render Register component', () => {
      cy.contains('Register').click()
      cy.root().should('contain','Name')
        .should('contain', 'Email')
        .should('contain', 'Password')
    })

    let randomName = Math.random().toString(36).substring(7);
    it('can login', () => {
        cy.get('[name=username]').type(randomName)
        cy.get('[name=email]').type('adam@hyde.com')
        cy.get('[name=password]').type('123456')
      cy.get('[value=Register]').click()
      cy.contains('Welcome').should('be.visible')
      })
  })