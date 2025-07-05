describe('UI and UX Functional Testing', { tags: ['@ui', '@ux', '@functional'] }, () => {
  it('should call this spec', () => {
      cy.visit('/');

      cy.expect(true).to.be.true;
  });
});
