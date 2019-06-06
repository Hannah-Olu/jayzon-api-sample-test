
describe('quotes API', () => {
    it('all quotes load successfully', () => {
        cy.request('http://localhost:3000/quotes')
            .then(response => {
            expect(response.status).to.equal(200);
        });
    });

     it('loads all music quotes successfully', () => {
      cy.request('http://localhost:3000/quotes?type=music')
        .then(response => {
          expect(response.status).to.equal(200);
        });
    });

    it('all quotes load successfully', () => {
        cy.request('http://localhost:3000/quotes?type=book')
            .then(response => {
            expect(response.status).to.equal(200);
        });
    });

});



