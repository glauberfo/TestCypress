import Login from "../../support/pages/TreinamentoPage";
import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given(/^que eu esteja na tela home do AutoSky e faço um login com as credenciais válidas$/, () => {
  cy.visit("/")
  Login.login()
  Login.validarTelaLogin()
});

When(/^clico no botão do operador$/, () => {
  cy.get('.dropdown-toggle').click()
})

And(/^clico em sair$/, () => {
  cy.get('.dropdown-menu > :nth-child(3) > a').click()
})

Then(/^devo ser redirecionado para a tela home do AutoSky$/, () => {
  cy.url().should(
    'be.equal',
    `${Cypress.config("baseUrl")}`
  )
})

When(/^clico na caixa de seleção de parceiros$/, () => {
  cy.get('#s2id_parceiro > .select2-choice').click()
})

And(/^seleciono o parceiro "([^"]*)"$/, (parceiro) => {
  cy.get('#select2-drop > .select2-search > .select2-input')
  .type(parceiro)

  cy.get('.select2-result-label').click()
})

And(/^clico no ambiente "([^"]*)" na aba ambientes e clico na opção Instancias$/, (ambiente) => {
  const elemento = cy.get('label').contains(ambiente)

  elemento.click( { force: true })

  elemento.parent().within(() => {
    cy.get('li').contains('Instancias').click({ force:true })
  })
})

Then(/^devo ter a opção de registrar as instâncias$/, () => {
  cy.get('.block-flat').contains('Registrar')
})
