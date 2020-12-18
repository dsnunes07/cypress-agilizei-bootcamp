Given(/^que acesso o site$/, () => {
  cy.intercept('**//api/1/databases/userdetails/collections/newtable?**').as('postNewTable');
  cy.intercept('POST', '**//api/1/databases/userdetails/collections/usertable?**').as('postUserTable')
  cy.intercept('**//api/1/databases/userdetails/collections/newtable?**').as('getNewTable')
	cy.visit('Register.html');
});