/// <reference types="cypress" />

class GoogleSearch {
    get googleSearch() { return cy.get('input[name="q"]'); }
    get googleSearchBtn() { return cy.get('input[name="btnK"]'); }
    get searchResults() { return cy.get('h3'); }

}

export default new GoogleSearch;