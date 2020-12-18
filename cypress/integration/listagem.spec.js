/// <reference types="cypress" />

context('Listagem', () => {
  it('Listagem sem registros', () => {
    const staticResponse = {
      body: {
        response: []
      },
      statusCode: 200
    }
    cy.intercept(
      '**//api/1/databases/userdetails/collections/newtable?**',
      staticResponse).as('getNewTable')

    cy.visit('WebTable.html')
    cy.get('div[role=row]').should('have.length', 1);
  });

  it('Listagem com apenas um registro', () => {
    cy.intercept('**//api/1/databases/userdetails/collections/newtable?**',
    { fixture: 'webtable-get-unic' }).as('tabelaUm')
    cy.visit('WebTable.html');
    cy.get('div[role=row]').should('have.length', 2);
  });
});