/// <reference types="cypress" />

describe('About', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/about')
    cy.url().should('include', '/about')
    cy.get('h1').should('have.text', 'About')
    cy.get('p').should('have.text', 'This is the about page.')
  })
})
