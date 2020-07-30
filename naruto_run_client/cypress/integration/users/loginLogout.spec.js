let fixtures = {}
beforeEach(() => {
    cy.fixture('registeredUser.json').then((user) => {
        // See what we get back from the fixture
        console.log('data from fixture:', user)
        fixtures.registeredUser = user
    })
})

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

    it('can login', () => {
      cy.get('Username').type(fixtures.registeredUser.username)
      cy.get('Password').type(fixtures.registeredUser.password)
    cy.get('Login').click()
    cy.get('/').should('be.visible')
    })
})

