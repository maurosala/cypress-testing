/// <reference types="cypress" />

describe('App', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('input').type('john doe')
    cy.get('[aria-label="Good Call"]').click()
    cy.get('h1').should('have.text', 'Hello john doe')

    cy.get('input').clear()
    cy.get('[aria-label="Bad Call"]').click()
    cy.get('h1').should('have.text', 'Please enter your name')
    cy.get('input').type('bad call')
    cy.get('[aria-label="Bad Call"]').click()
    cy.get('h1').should('have.text', '404')

    cy.get('[aria-label="About"]').click()
    cy.url().should('include', '/about')
    cy.get('h1').should('have.text', 'About')
  })
})
