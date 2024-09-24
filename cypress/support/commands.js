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
Cypress.Commands.add('apiGet', (url) => {
    cy.request({
        url: url,
        method: 'GET',
        failOnStatusCode: false,
        timeout: 0,
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    }).then((resp) => {
        expect(resp.status).to.eq(200)
    }
    )

})

Cypress.Commands.add('apiDelete', (url) => {
    cy.request({
        url: url,
        method: 'DELETE',
        failOnStatusCode: false,
        timeout: 0,
        headers: {
            Authorization: token
        }
    }).then((resp) => {
        expect(resp.status).to.eq(200)

    }
    )
})
Cypress.Commands.add('GenerateRandomNumber', (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);

})
Cypress.Commands.add('apiPost', (url, payload, username, password) => {
    return cy.request({
        url: url,
        method: 'POST',
        failOnStatusCode: false,
        timeout: 0,
        headers: {
            Authorization: token
        },
        body: payload,
        failOnStatusCode: false
    }).then((resp) => {
        expect(resp.status).to.eq(201)
    })
})
