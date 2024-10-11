/// <reference types="cypress" />

describe('logout', () => {
    // beforeEach(() => {
    //     cy.login()
    //     cy.visit('/')
    // })

    it('failed', () => {
        cy.visit('/users/sign_in')
        cy.get("[data-qa-selector='sign_in_button']").click()
        cy.contains('This field is required.').should('be.visible')
    })

    it.only('successfully', () => {
        cy.login()
        cy.visit('/')
        cy.logout()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
})