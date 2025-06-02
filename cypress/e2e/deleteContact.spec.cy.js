describe('Delete Contact Tests', () => {
  it('Can delete a contact', () => {

    let random = Math.floor(Math.random() * 1000)

    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
    cy.get('#email').type('hartzart@ahrixthinh.net')
    cy.get('#password').type('cypressproject')
    cy.get('#submit').click()
    cy.get('#add-contact').click()
    cy.get('#firstName').type('Test' + random)
    cy.get('#lastName').type('User')
    cy.get('#birthdate').type('1990-01-01')
    cy.get('#email').type('hartzart@ahrixthinh.net')
    cy.get('#phone').type('1234567890')
    cy.get('#street1').type('123 Test St')
    cy.get('#street2').type('Apt 456')
    cy.get('#city').type('Test City')
    cy.get('#stateProvince').type('Test State')
    cy.get('#postalCode').type('12345')
    cy.get('#country').type('Test Country')
    cy.get('#submit').click()

    cy.contains('Test' + random + ' User').click()
    cy.get('#delete').click()
    cy.on('window:confirm', () => true) // Automatically confirm the delete dialog
    cy.get('.contactTableBodyRow').contains('Test' + random + ' User').should('not.exist')
  })
})