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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
require('cy-verify-downloads').addCustomCommand();
require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add("clicarBotao", (id, timeout) => {
    cy.get(id, {timeout: timeout}).scrollIntoView()
    .click( {force: true} )
});

Cypress.Commands.add("digitarTexto", (id, texto, timeout = 4000, delay = 10) => {
    cy.get(id, {timeout: timeout}).scrollIntoView().clear()
    .type( texto, {delay: delay})
  });

Cypress.Commands.add("selecionarValor", (elemento, valor) => {
    cy.get(elemento, {timeout: 15000}).scrollIntoView().click()
    cy.get(`ul > li[data-value="${valor}"]`).click();
})

Cypress.Commands.add("validarMensagem", (id, texto, timeout = 4000) => {
    cy.get(id, {timeout: timeout}).should("have.text", texto)
});

Cypress.Commands.add("genericRequest", (method, uri, data = null) => {
    const tokenVar = JSON.parse(sessionStorage.getItem('persist:root'))
    const { data: { token } } = JSON.parse(tokenVar["authenticate"])

    cy.request({
        method: `${method}`,
        url: `${uri}`,
        headers: { 
            Authorization: `Token ${token}`,
            Accept: 'application/json',
        },
        body: { ...data }
    })
});
