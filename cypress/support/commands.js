// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
    cy.get('#email').type('hartzart@ahrixthinh.net')
    cy.get('#password').type('cypressproject')
    cy.get('#submit').click()
})

Cypress.Commands.add('addContact', (random) => {
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
})

Cypress.Commands.add('deleteContact', (random) => {
    // cy.contains('Test' + random + ' User').click()
    cy.get('#delete').click()
    cy.on('window:confirm', () => true)
    // cy.get('.contactTableBodyRow').contains('Test' + random + ' User').should('not.exist')
})