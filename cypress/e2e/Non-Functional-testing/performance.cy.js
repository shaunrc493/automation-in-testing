describe('Performance audit', { tags: ['@performance', '@non-functional'] }, () => {
    // Set the performance threshold for Lighthouse
    // This is adjusted based on the Lighthouse performance score in previous runs
    // Last updated: 2025-07-06
    const performanceThreshold = 66;

    it('should run lighthouse for performance metrics', () => {
      // Arrange
      // Ensure the performance threshold is set to an agreed value based on previous runs
      // This threshold is used to determine if the performance is acceptable
      // Act
      // Visit the homepage
      // Assert
      // Check performance metrics using Lighthouse
        cy.visit('/');

        cy.lighthouse({
            performance: performanceThreshold,
        }, {
            formFactor: 'desktop',
            screenEmulation: {
                mobile: false,
                width: 1920,
                height: 1080,
                deviceScaleFactor: 1,
                disabled: false,
            },
            throttling: {
                rttMs: 150,
                throughputKbps: 16384,
                cpuSlowdownMultiplier: 1,
            },
        });
    });
});
