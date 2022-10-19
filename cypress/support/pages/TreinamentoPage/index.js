class Login {

    preencherUser() {
        cy.get('#id_usuario').type(Cypress.env('username'));
    }

    preencherPass() {
        cy.get('#id_senha').type(Cypress.env('password'));
    }

    clicarNoBotaoLogin() {
        cy.get('.btn').click();
    }

    validarTelaLogin() {
        cy.get('.header')
        .contains('Selecione um parceiro ou um cliente');
    }

    login() {
        this.preencherUser();
        this.preencherPass();
        this.clicarNoBotaoLogin();
    }
}

export default new Login();
