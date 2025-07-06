describe('UI and UX Functional Testing', { tags: ['@ui', '@ux', '@functional'] }, () => {
    context('When viewing on a desktop', () => {
        beforeEach(() => {
          cy.viewport(1920, 1080);
          cy.visit('/');
        });

        it('should display the homepage correctly', () => {
          // Arrange:
          // No specific arrangement needed for this test
          
          // Act:
          // Visit the homepage
          // This will load the application and all its components
          
          // Assert:
          // Check that each of the main components are visible
          // This ensures that the UI is functional and the user can interact with it
          // Do not check for specific text due to admin ability to update content
            cy.get('.hero')
              .should('be.visible');

            cy.get('h1')
              .should('be.visible');
            
            cy.get('#booking')
              .should('be.visible');

            cy.get('#rooms')
              .should('be.visible');

            cy.get('#location')
              .should('be.visible');

            cy.get('#location > .container > .row > :nth-child(1)')
              .should('be.visible');

            cy.get('#contact')
              .should('be.visible');

            cy.get('footer')
              .should('be.visible');
        });

        it('should scroll to booking section and validate room links with selected dates', () => {
          // Arrange:
          // No specific arrangement needed for this test

          // Act:
          // Scroll to the booking section
          // This will load the booking component and its functionality

          // Assert:
          // Check that the booking section is visible
          // This ensures that the user can interact with the booking functionality
            const inputCheckInDate = '01/01/2025';
            const outputCheckInDate = '2025-01-01';
            const inputCheckOutDate = '02/01/2025';
            const outputCheckOutDate = '2025-01-02';
        
            // Check Availability date inputs do not use ID's or data attributes, so we use nth-child selectors
            cy.get(':nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
              .clear()
              .type(inputCheckInDate);
            cy.get(':nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
              .clear().type(inputCheckOutDate);
        
            cy.contains('button', 'Check Availability').click();
        
            cy.get('#booking').should('be.visible');
        
            cy.get('.room-card').should('have.length.at.most', 3);
        
            cy.get('.room-card').each(($room) => {
              cy.wrap($room)
                .find('a')
                .should('have.attr', 'href')
                .and('include', `checkin=${outputCheckInDate}`)
                .and('include', `checkout=${outputCheckOutDate}`);
            });
        });

        it('should validate the room buttons navigate to the correct room details page', () => {
          // Arrange:
          // No specific arrangement needed for this test

          // Act:
          // Click the first room link
          // This will navigate to the room details page

          // Assert:
          // Check that the URL contains the room name
          // This ensures that the user is directed to the correct room details page
          // Check that the room details page displays the correct room name
          // This ensures that the room details page is displaying the correct information
            cy.get('.room-card')
              .first()
              .then(($room) => {
                const roomName = $room.find('h3').text();
                const roomLink = $room.find('a').attr('href');
                
                // Click the first room link
                cy.wrap($room).find('a').click();
                
                // Assert that the URL contains the room name
                cy.url().should('include', roomLink);
                
                // Assert that the room details page displays the correct room name
                cy.get('h1').should('contain.text', roomName);
              });
        });

        it('should prove the contact form includes working validation', () => {
          // Arrange:
          // No specific arrangement needed for this test

          // Act:
          // Visit the contact form
          // This will load the contact form component and its functionality
          // Submit the form without filling in any fields

          // Assert:
          // Check that the form displays validation errors
          // This ensures that the form is validating user input correctly
            cy.get('#contact').scrollIntoView();
            cy.get('#contact form').within(() => {
              cy.get('.d-grid > .btn').click();
            });

            cy.get('.alert')
              .should('be.visible')
              .and('contain.text', 'Message may not be blank')
              .and('contain.text', 'Phone may not be blank')
              .and('contain.text', 'Subject may not be blank')
              .and('contain.text', 'Phone must be between 11 and 21 characters.')
              .and('contain.text', 'Name may not be blank')
              .and('contain.text', 'Email may not be blank')
              .and('contain.text', 'Subject must be between 5 and 100 characters.')
              .and('contain.text', 'Message must be between 20 and 2000 characters.');

            cy.completeContactForm(
              'Cypress Test User',
              'cypress-test@user.com',
              '12345678901',
              'Cypress Test Subject',
              'This is a test message to validate the contact form functionality using Cypress.'
            );
        });

        it('should validate contact forms create messages in the admin panel', () => {
          // Arrange:
          // No specific arrangement needed for this test

          // Act:
          // Visit the contact form
          // Submit the form with valid data
          // Login to the admin panel

          // Assert:
          // Check that the message appears in the admin panel
          // This ensures that the contact form is creating messages correctly
            cy.completeContactForm(
              'Cypress Test User',
              'cypress-test@user.com',
              '12345678901',
              'Cypress Test Subject',
              'This is a test message to validate the contact form functionality using Cypress.'
            );

            cy.adminLogin('admin', 'password');

            cy.visit('/admin/message');

            cy.get('.messages')
              .should('be.visible')
              .and('contain.text', 'Cypress Test User')
              .and('contain.text', 'Cypress Test Subject');
        });
    });

    context('When viewing on a tablet', () => {
        it('should display the homepage correctly', () => {
          // Arrange:
          // No specific arrangement needed for this test
          
          // Act:
          // Visit the homepage
          // This will load the application and all its components
          
          // Assert:
          // Check that each of the main components are visible
          // This ensures that the UI is functional and the user can interact with it
            cy.viewport('ipad-2');
            cy.visit('/');

            cy.get('.hero')
              .should('be.visible');

            cy.get('h1')
              .should('be.visible');
            
            cy.get('#booking')
              .should('be.visible');

            cy.get('#rooms')
              .should('be.visible');

            cy.get('#location')
              .should('be.visible');

            cy.get('#contact')
              .should('be.visible');

            cy.get('footer')
              .should('be.visible');
        });
    });

    context('When viewing on a mobile device', () => {
        it('should display the homepage correctly', () => {
          // Arrange:
          // No specific arrangement needed for this test
          
          // Act:
          // Visit the homepage
          // This will load the application and all its components
          
          // Assert:
          // Check that each of the main components are visible
          // This ensures that the UI is functional and the user can interact with it
            cy.viewport('iphone-6');
            cy.visit('/');

            cy.get('.hero')
              .should('be.visible');

            cy.get('h1')
              .should('be.visible');
            
            cy.get('#booking')
              .should('be.visible');

            cy.get('#rooms')
              .should('be.visible');

            cy.get('#location')
              .should('be.visible');

            cy.get('#contact')
              .should('be.visible');

            cy.get('footer')
              .should('be.visible');
        });
    });
});
