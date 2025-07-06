describe('Performance audit', { tags: ['@performance', '@non-functional'] }, () => {
    // Set the performance threshold for Lighthouse
    // This is adjusted based on the Lighthouse performance score in previous runs
    // Last updated: 2025-07-06
    const performanceThreshold = 66;

    it('should run lighthouse for performance metrics', () => {
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
