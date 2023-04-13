import search  from "../../support/page-objects/google.search.page";

describe('Google Navigation', () => {

    it('API TEST REAL STONKS TSLA', () => {
        cy.api({
            method: 'GET',
            url: 'https://realstonks.p.rapidapi.com/TSLA',
            headers: {
                'X-RapidAPI-Key': 'fb3d1d5420msh74cdb594e5b6d22p167738jsn6a1cfeb9dbc9',
                'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
            }}).then(
            (response) => {
              // response.body is automatically serialized into JSON
                cy.log(response.body)
                expect(response.status).to.equal(200)
            }
        )
    });

    it('API TEST REAL STONKS MSFT', () => {
        cy.api({
            method: 'GET',
            url: 'https://realstonks.p.rapidapi.com/MSFT',
            headers: {
                'X-RapidAPI-Key': 'fb3d1d5420msh74cdb594e5b6d22p167738jsn6a1cfeb9dbc9',
                'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
            }}).then(
            (response) => {
              // response.body is automatically serialized into JSON
                cy.log(response.body)
                expect(response.status).to.equal(200)
            }
        )
    });

    it('API TEST REAL STONKS F', () => {
        cy.request({
            method: 'GET',
            url: 'https://realstonks.p.rapidapi.com/F',
            headers: {
                'X-RapidAPI-Key': 'fb3d1d5420msh74cdb594e5b6d22p167738jsn6a1cfeb9dbc9',
                'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
            }}).then(
            (response) => {
              // response.body is automatically serialized into JSON
                cy.log(response.body)
                expect(response.status).to.equal(200)
            }
        )
    });


    it('API TEST REAL STONKS GE', () => {
        cy.api({
            method: 'GET',
            url: Cypress.env('url'),
            headers: {
                'X-RapidAPI-Key': Cypress.env('X-RapidAPI-Key'),
                'X-RapidAPI-Host': Cypress.env('X-RapidAPI-Host')
            }}).then(
            (response) => {
              // response.body is automatically serialized into JSON
                cy.log(response.body)
                expect(response.status).to.equal(200)
            }
        )
    });

    it('API TEST REAL STONKS AAPL', { 
        env: {
                hideCredentials: true,
                hideCredentialsOptions: {
                headers: ['X-RapidAPI-Key'],
                }
            }
        }, () => {

            cy.api({
            method: 'GET',
            url: 'https://realstonks.p.rapidapi.com/AAPL',
            headers: {
                'X-RapidAPI-Key': 'fb3d1d5420msh74cdb594e5b6d22p167738jsn6a1cfeb9dbc9',
                'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
            }}).then(
            (response) => {
              // response.body is automatically serialized into JSON
                cy.log(response.body)
                expect(response.status).to.equal(200)
            }
        )
    });


});