/// <reference types="cypress" />

describe('About', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/about')
    cy.url().should('include', '/about')
    cy.get('h1').should('have.text', 'About')
  })
})
