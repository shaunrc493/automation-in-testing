describe('Accessibility audit', { tags: ['@accessibility', '@non-functional'] }, () => {
    it('should inject axe and check for accessibility violations', () => {
      // Arrange
      // No specific arrangement needed for this test
      // Act
      // Visit the homepage and set viewport size
      // Assert
      // Check for accessibility violations using axe
        cy.visit('/');
        cy.viewport(1920, 1080);
        
        cy.injectAxe();
        cy.checkA11y(null, {
            runOnly: {
                type: 'tag',
                values: ['wcag2a', 'wcag2aa']
            }
        }, (violations) => {
            if (violations.length) {
                cy.task('log', `Accessibility violations found: ${violations.length}`);
                violations.forEach((violation) => {
                    cy.task('log', `Violation: ${violation.id} - ${violation.description}`);
                });
            } else {
                cy.task('log', 'No accessibility violations found');
            }
        });

        cy.expect(true).to.be.true;
    });
});
