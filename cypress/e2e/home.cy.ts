/// <reference types="cypress" />

describe('Home', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('[aria-label="Good Call"]').should('be.disabled')
  })
})
