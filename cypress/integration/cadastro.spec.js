/// <reference types="cypress" />

import { Chance } from "chance";


let chance = new Chance();

context('Cadastro', () => {
  it('Cadastro de usuário no site', () => {

    // rotas
    cy.intercept('**//api/1/databases/userdetails/collections/newtable?**').as('postNewTable');
    cy.intercept('POST', '**//api/1/databases/userdetails/collections/usertable?**').as('postUserTable')
    cy.intercept('**//api/1/databases/userdetails/collections/newtable?**').as('getNewTable')
    
    cy.visit('Register.html');
    // campos de texto
    cy.get('input[placeholder="First Name"]').type(chance.first())
    cy.get('input[ng-model^=Last]').type(chance.last())
    cy.get('input[ng-model^=Email]').type(chance.email())
    cy.get('input[ng-model^=Phone]').type(chance.phone({ formatted: false }))
    // radio
    cy.get('input[value=FeMale]').check()
    // checkbox
    cy.get('input[type=Checkbox]').check('Cricket')
    // select
    cy.get('select#Skills').select('C')
    // select simples
    cy.get('select#countries').select('Brazil')
    // select escondido
    cy.get('select#country').select('Bangladesh', { force: true })
    cy.get('select#yearbox').select('1997');
    cy.get('select[placeholder="Month"]').select('March');
    cy.get('select#daybox').select('2');
    cy.get('input#firstpassword').type('Cypress@2021');
    cy.get('input#secondpassword').type('Cypress@2021');
    // upload de arquivo
    cy.get('input#imagesrc').attachFile('roupa.jpg')
    // click
    cy.get('button#submitbtn').click();

    // validar status das requisições
    cy.wait('@postNewTable').its('response.statusCode').should('equal', 200)
    cy.wait('@postUserTable').its('response.statusCode').should('equal', 200)
    
    // validar url
    cy.url().should('contain', 'WebTable')
  })
})

//select#Skills
//select#countries
//select#country
//select#yearbox
//select[ngmodel^=month]
//select#daybox
//input#firstpassword
//input#secondpassword