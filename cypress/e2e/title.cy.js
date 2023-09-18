describe('Display Page Title', () => {
    it('should display title correctly', () => {
        cy.visit(Cypress.env('host'))

        cy.get('a[data-testid="dynamic-title-link"]')
            .should('have.length', 1)
            .click()

        cy.title().should('eq', 'My Sample Site')

        cy.get('[data-testid="new-title-query"]')
            .should('have.length', 1)
            .click()
            .clear()
            .invoke('val', 'query title')

        cy.get('[data-testid="new-title-query"]')
            .should('have.length', 1)
            .click()
            .type(' {backspace}')

        cy.title().should('eq', 'query title')

        cy.get('[data-testid="new-title-context"]')
            .should('have.length', 1)
            .click()
            .clear()
            .type('context title')

        cy.title().should('eq', 'context title')

        cy.get('[data-testid="new-title-context"]')
            .should('have.length', 1)
            .click()
            .clear()

        cy.title().should('eq', 'query title')

        cy.get('[data-testid="new-title-query"]')
            .should('have.length', 1)
            .click()
            .clear()

        cy.title().should('eq', 'My Sample Site')
    })
})