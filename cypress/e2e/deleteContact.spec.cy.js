describe('Delete Contact Tests', () => {
  it('Can delete a contact', () => {

    let random = Math.floor(Math.random() * 1000)

    cy.login()
    cy.addContact(random)

    cy.contains('Test' + random + ' User').click()
    cy.get('#delete').click()
    cy.on('window:confirm', () => true) // Automatically confirm the delete dialog
    cy.get('.contactTableBodyRow').contains('Test' + random + ' User').should('not.exist')
  })
})