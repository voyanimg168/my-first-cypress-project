describe('Add Contact Tests', () => {
  it('Can add new contact', () => {

    let random = Math.floor(Math.random() * 1000)

    cy.login()
    cy.addContact(random)
    
    cy.contains('Test' + random + ' User').click()
    cy.get('#firstName').should('contain', `Test${random}`) 
    cy.get('#lastName').should('contain', `User`) 
    cy.get('#birthdate').should('contain', `1990-01-01`)
    cy.get('#email').should('contain', `hartzart@ahrixthinh.net`)
    cy.get('#phone').should('contain', `1234567890`)
    cy.get('#street1').should('contain', `123 Test St`)
    cy.get('#street2').should('contain', `Apt 456`)
    cy.get('#city').should('contain', `Test City`)
    cy.get('#stateProvince').should('contain', `Test State`)
    cy.get('#postalCode').should('contain', `12345`)
    cy.get('#country').should('contain', `Test Country`)

    cy.deleteContact()
  })
})