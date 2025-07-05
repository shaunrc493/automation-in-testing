describe('Accessibility and Non Functional testing', { tags: ['@accessibility', '@non-functional'] }, () => {
    it('should call this spec', () => {
        cy.visit('/');

        cy.expect(true).to.be.true;
    });
});
