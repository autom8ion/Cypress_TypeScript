import search  from "../../support/page-objects/google.search.page";

describe('Google Navigation', () => {

    it('Google Search', () => {
        cy.visit('/')
        search.googleSearch.type("Something");
        search.googleSearchBtn.click({force:true});
        search.searchResults.should('be.visible');
    });

});