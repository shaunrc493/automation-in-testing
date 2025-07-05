describe('API Testing', { tags: ['@api'] }, () => {
    it('should call this spec', () => {
        cy.visit('/');

        cy.expect(true).to.be.true;
    });
});
