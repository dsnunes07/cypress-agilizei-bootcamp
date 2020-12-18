
Given(/^que o site não possui registros$/, () => {
	const staticResponse = {
    body: {
      response: []
    },
    statusCode: 200
  }
  cy.intercept(
    '**//api/1/databases/userdetails/collections/newtable?**',
    staticResponse).as('getNewTable')
});


Given(/^que o site possui apenas um registro$/, () => {
	cy.intercept('**//api/1/databases/userdetails/collections/newtable?**',
    { fixture: 'webtable-get-unic' }).as('tabelaUm')
});



When(/^acessar a listagem$/, () => {
	cy.visit('WebTable.html')
});


Then(/^devo visualizar a listagem vazia$/, () => {
	cy.get('div[role=row]').should('have.length', 1);
});


Then(/^devo visualizar apenas com um registro$/, () => {
	cy.get('div[role=row]').should('have.length', 2);
});
