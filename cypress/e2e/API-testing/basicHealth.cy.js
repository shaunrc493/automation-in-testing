describe('API Testing', { tags: ['@api'] }, () => {
    context('Branding API', () => {
        it('should return a 200 status code', () => {
            cy.request('GET', 'https://automationintesting.online/api/branding')
                .then((response) => {
                    expect(response.status).to.eq(200);
                });
        });

        it('should return a response time less than 1000ms', () => {
            cy.request('GET', 'https://automationintesting.online/api/branding')
                .then((response) => {
                    expect(response.duration).to.be.lessThan(1000);
                });
        });

        it('should get branding information', () => {
            cy.request('GET', 'https://automationintesting.online/api/branding')
                .then((response) => {
                    expect(response.body).to.have.property('name');
                    expect(response.body).to.have.property('map');
                    expect(response.body).to.have.property('logoUrl');
                    expect(response.body).to.have.property('description');
                    expect(response.body).to.have.property('directions');
                    expect(response.body).to.have.property('contact');
                    expect(response.body).to.have.property('address');
                    expect(response.body.contact).to.have.property('name');
                    expect(response.body.contact).to.have.property('phone');
                    expect(response.body.contact).to.have.property('email');
                    expect(response.body.address).to.have.property('line1');
                    expect(response.body.address).to.have.property('line2');
                    expect(response.body.address).to.have.property('postTown');
                    expect(response.body.address).to.have.property('county');
                    expect(response.body.address).to.have.property('postCode');
                });
        });
    });

    context('Room API', () => {
        it('should return a 200 status code for all rooms', () => {
            cy.request('GET', 'https://automationintesting.online/api/room')
                .then((response) => {
                    expect(response.status).to.eq(200);
                });
        });

        it('should return a 200 status code for specific room', () => {
            cy.request('GET', 'https://automationintesting.online/api/room')
                .then((response) => {
                    const roomId = response.body.rooms[0].roomid;
                    expect(roomId).to.exist;

                    cy.request(`GET`, `https://automationintesting.online/api/room/${roomId}`)
                        .then((roomResponse) => {
                            expect(roomResponse.status).to.eq(200);
                            expect(roomResponse.body).to.have.property('roomid', roomId);
                        });
                });
        });

        it('should return a 200 status code for rooms with specific dates', () => {
            cy.request('GET', 'https://automationintesting.online/api/room?checkin=2025-07-06&checkout=2025-07-07')
                .then((response) => {
                    expect(response.status).to.eq(200);
                });
        });

        it('should get room details', () => {
            cy.request('GET', 'https://automationintesting.online/api/room')
                .then((response) => {
                    const roomId = response.body.rooms[0].roomid;
                    const roomName = response.body.rooms[0].roomName;
                    const roomDescription = response.body.rooms[0].description;
                    expect(roomId).to.exist;

                    cy.request(`GET`, `https://automationintesting.online/api/room/${roomId}`)
                        .then((roomResponse) => {
                            expect(roomResponse.status).to.eq(200);
                            expect(roomResponse.body).to.have.property('roomid', roomId);
                            expect(roomResponse.body).to.have.property('roomName', roomName);
                            expect(roomResponse.body).to.have.property('description', roomDescription);
                        });
                });
        });
    });

});
