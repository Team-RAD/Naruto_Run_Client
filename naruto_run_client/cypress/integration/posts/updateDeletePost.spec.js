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
      cy.get('[name=username]').type(fixtures.registeredUser.username)
      cy.get('[name=password]').type(fixtures.registeredUser.password)
    cy.get('[value=Login]').click()
    cy.contains('Welcome').should('be.visible')
    })

    it('Should go to the Add Post page', () => {
        cy.visit('/')
        cy.contains('Add Post').click()
        cy.url().should('include', '/posts/new')
      })

      it('should render Add Post component', () => {
        cy.contains('Add Post').click()
        cy.root().should('contain','Add Your Naruto Post')
      })

      it('can Add Post', () => {
        cy.get('[name=pre_tech_job]').type('words')
        cy.get('[name=current_tech_job]').type('morewords')
        cy.get('[name=education]').type('1')
        cy.get('[name=resources_required]').type('2')
        cy.get('[name=time_taken]').type('3')
        cy.get('[name=cost]').type('hello')
        cy.get('[name=journey]').type('bye')
        cy.get('[name=tech_stack]').type('test')
        cy.get('[name=os_allegiance]').type('123')
        cy.get('[name=fueled_by]').type('abc')
        cy.get('[name=favourite_coding_playlist]').type('gay music')
        cy.get('[name=follow_me_links]').type('adam')
        cy.get('[value=Create]').click()
        cy.get('[value=Delete]').should('be.visible')

      })

      it('can Update Post', () => {
        cy.get('[value=Edit]').click()
        cy.get('[name=pre_tech_job]').type('Adam')
        cy.get('[name=current_tech_job]').type('Hyde')
        cy.get('[name=education]').type('is')
        cy.get('[name=resources_required]').type('testing')
        cy.get('[name=time_taken]').type('this')
        cy.get('[name=cost]').type('beasts')
        cy.get('[name=journey]').type('functionality')
        cy.get('[name=tech_stack]').type('for')
        cy.get('[name=os_allegiance]').type('our')
        cy.get('[name=fueled_by]').type('final')
        cy.get('[name=favourite_coding_playlist]').type('goddamn')
        cy.get('[name=follow_me_links]').type('assignment')
        cy.get('[value=Update]').click()
        cy.get('[value=Delete]').should('be.visible')

      })

      it('It should delete post', () => {
        cy.get('[value=Delete]').click()
        cy.contains('Welcome').should('be.visible')
      })


})