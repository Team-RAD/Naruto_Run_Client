describe('Test login', () => {
    it('Should go to the login page', () => {
      cy.visit('/')
      cy.contains('Login').click()
      cy.url().should('include', '/login')
    })

    it('should render SignIn component', () => {
      cy.contains('Login').click()
      cy.root().should('contain','Username')
        .should('contain', 'Password')
    })
  })

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
  })