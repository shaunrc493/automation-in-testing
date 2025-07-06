import './commands'

const registerCypressGrep = require('@cypress/grep');
registerCypressGrep();

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Minified React error #418')) {
        return false; // prevents Cypress from failing the test
    }
    // allow other uncaught exceptions to fail the test
    return true;
});
