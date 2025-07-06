import "@cypress-audit/lighthouse/commands";

Cypress.Commands.add('adminLogin', (username, password) => {
    cy.session('admin', () => {
        cy.visit('/admin');
        cy.get('#username')
          .type('admin');
        cy.get('#password')
          .type('password');
        cy.get('#doLogin')
          .click();
    }, {
        validate() {
            cy.url().should('include', '/admin');
            cy.get('#frontPageLink')
              .should('be.visible')
              .should('contain.text', 'Front Page');
        }
    });
});

Cypress.Commands.add('completeContactForm', (name, email, phone, subject, message) => {
    cy.get('#contact').scrollIntoView();
    cy.get('#contact form').within(() => {
        cy.get('[data-testid="ContactName"]')
        .type(name);
        cy.get('[data-testid="ContactEmail"]')
        .type(email);
        cy.get('[data-testid="ContactPhone"]')
        .type(phone);
        cy.get('[data-testid="ContactSubject"]')
        .type(subject);
        cy.get('[data-testid="ContactDescription"]')
        .type(message);
        cy.get('.d-grid > .btn').click();
    });

    cy.get('.col-lg-8 > .card > .card-body')
        .should('be.visible');
});
