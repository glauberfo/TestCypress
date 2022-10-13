/// <reference types="cypress" />
const el = require("./elements").ELEMENTS;

const user = 'glauber.oliveira@skyone.solutions';
const pass = 'euamoofabio24';
const passIncorreto = '123123';
const twofactor = require("node-2fa");

class Login {
  
  preencherUser() {
    cy.get(el.campoUser)
      .scrollIntoView()
      .should("be.visible")
      .type(user, { force: true })
      .should("not.have.value", "");
  }

  preencherPass() {
    cy.get(el.campoPass)
      .scrollIntoView()
      .should("be.visible")
      .type(pass, { force: true })
      .should("not.have.value", "");
  }

  preencherMFA() {
    const token = twofactor.generateToken("BHYK7B3YCFIMLA57HUEVMMOE6CBTCPK6").token
    cy.get(el.campoMFA, {timeout : 30000})
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type(token, { force: true })
      .should("not.have.value", "");
  }

  preencherPassIncorreto() {
    cy.get(el.campoPass)
      .scrollIntoView()
      .should("be.visible")
      .type(passIncorreto, { force: true })
      .should("not.have.value", "");
  }

  clicarNoBotaoLogin() {
    cy.get(el.btnLoginClass)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }

  clicarNoBotaoMFA() {
    cy.get(el.btnEntrarMFA)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }

  clicarEsqueciMinhaSenha() {
    cy.get(el.esqueciMinhaSenha)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }

  preencherEmailRecuperarSenha() {
    cy.get(el.CampoEmailEsqueciMinhaSenha)
      .scrollIntoView()
      .should("be.visible")
      .type(user, { force: true })
      .should("not.have.value", "");
  }

  clicarRecuperar() {
    cy.get(el.btnRecuperarSenha)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }

  finalizarSessao(){
    cy.pause();
    cy.get(el.btnLogout)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true })
      cy.get(el.btnFinalizaSessao)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }

  SelectParc(pac) {
    cy.get(el.selectParc).should("be.visible").click();

    cy.get(el.input)
      .eq(1)
      .children()
      .focus()
      .type("{downarrow}", { force: true })
      .type("{downarrow}", { force: true })
      .type("{enter}");

    cy.get(".page-title").contains("Parceiro DEV - AWS");
  }

  validarTelaLogin() {
    cy.get('body').then( body => {
      if (body.text().includes('Companhia')) {
        this.logout();
        this.login();
      } else {
        this.login();
      }
    })
  }

  login(){
    this.preencherUser();
    this.preencherPass();
    this.clicarNoBotaoLogin();
    this.fluxoMFA()
  }

  fluxoMFA(count = 1) {
    cy.log(count)
    if (count > 10)
      cy.log("Tentatias excedidas.")
    else {
      this.preencherMFA();
      this.clicarNoBotaoMFA();
    
      cy.wait(1000)
      cy.get('div[id="root"]', {timeout: 15000}).then( root => {
        const msgErro = 'div[class*="MuiSnackbar-root"]';
        if (root.has(msgErro) && root.children(msgErro).text().includes("Código de autenticação inválido")) {
          ++count;
          this.fluxoMFA(count)
        }
      });
    }

  }

  logout() {
    cy.wait(2000);
    cy.get('#btn-profile-options', {timeout : 30000})
    .scrollIntoView()
    // .should("be.visible")
    .click({ force: true })
    cy.get('#btn-logout', {timeout : 30000})
    .scrollIntoView()
    // .should("be.visible")
    .click({ force: true })
    cy.get(el.confirmaFinalizar, {timeout : 3000})
    .scrollIntoView()
    // .should("be.visible")
    .click({ force: true })
    cy.contains("Entrar com e-mail e senha").should("be.visible")
  }
}
export default new Login();
