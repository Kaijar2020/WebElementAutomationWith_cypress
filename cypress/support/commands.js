// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//require('cypress-xpath');

//iframe-plugin
//import 'cypress-iframe';

/// <reference types="Cypress" />

require('cypress-xpath');

//Cypress custom command for iFrame

    Cypress.Commands.add('getIframe', (iframe)=>{
    cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
    })

    //Performing Session Practice this custom commands need.

    Cypress.Commands.add('loginWithSession', (username, password) => {

        cy.session([username, password],()=>{  //Cy.session() is used for make a session for this user.

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get("[name = 'username']").clear().type(username)
            cy.get("[name = 'password']").clear().type(password)
            cy.get('form').submit()
        } )
    })
    

