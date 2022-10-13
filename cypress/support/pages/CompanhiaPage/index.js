/// <reference types="cypress" />


const el = require("./elements").ELEMENTS;


class Companhia {
  
  clicarMenuLateral() {
    cy.get(el.btnMenuLateral, {timeout : 30000})
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true })
  }

  clicarListarCompanhia() {
    cy.get(el.btnListarCompanhia, {timeout : 30000})
    .should("be.visible")
    .click({ force: true })
  }

  clicarAdicionarCompanhia(){
    cy.get(el.btnAdicionarCompanhia, {timeout : 30000})
    .should("be.visible")
    .click({ force: true });
  }

  clicarBotaoOpcoes() {
    cy.get(el.botaoOpcoes, {timeout : 30000})
    .click({ force: true })
  }
  
  clicarEditarCompanhia() {
    cy.get(el.editarCompanhia, {timeout : 30000})
    .should("be.visible")
    .click({ force: true })

  }

  editarCampos(novoNome, campo) {
    cy.get(el.btnSubmit, {timeout : 30000})
    .scrollIntoView()
    .should("be.visible").should("have.text", "Salvar")
    cy.get(campo, {timeout : 30000})
    .then($input => {
      if ($input.is(':enabled')){
        cy.wrap($input)
        .focus()
        .click({ force: true })
        .clear()
        .type(novoNome)
      }
    })

  }

  salvarCampos() {
    cy.get(el.btnSubmit, {timeout : 30000})
    .scrollIntoView()
    .should("be.visible")
    .and("be.enabled")
    .click({ force: true })

  }

  cancelarCampos() {
    cy.get(el.btnCancel, {timeout: 30000})
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true });
  }

  pesquisarCompanhia(texto) {
    cy.get(el.searchCompanhias)
    .should("be.visible")
    .focus()
    .type(texto)
    .wait(1200)
    .should("not.have.value", "");
  }

  mudaEstadoCompanhia(){
    cy.get(el.btnBloquearDesbloquearCompanhia, {timeout : 30000})
    .scrollIntoView()
    .should("be.visible")
    .click( { force: true} )
  }

  mudaEstadoCompanhiaListar() {
    cy.get(el.btnSubmit, {timeout : 30000})
    .scrollIntoView()
    .should("have.text", "Salvar")
    cy.get(el.btnBloquearDesbloquearCompanhiaNoEditar, {timeout : 30000})
    .scrollIntoView()
    .should("be.visible")
    .click( { force: true} )
  }

  removerCompanhia() {
    cy.get(el.btnRemoverCompanhia, {timeout : 30000})
    .scrollIntoView()
    .should('be.visible')
    .click( { force: true} )
  }


  clicarListarCompanhia(){
    cy.get(el.btnListarCompanhia)
    .should("be.visible")
    .click({ force: true });
  }

  clicarConfirmarMudancaCompanhia() {
    cy.get(el.btnDialogConfirmar, {timeout : 30000})
    .should("be.visible")
    .click( { force: true} )
  }
  clicarCancelarMudancaCompanhia() {
    cy.get(el.btnDialogCancelar, {timeout : 30000})
    .should("be.visible")
    .click( { force: true} )
  }


  clicarRemoverCompanhiaEmEditar() {
    cy.get(el.btnSubmit, {timeout : 30000})
    .scrollIntoView()
    .should("have.text", "Salvar")
    cy.get(el.btnRemoverCompanhiaNoEditar, {timeout : 30000})
    .click({ force: true })
  }

  clicarConfirmarRemoverCompanhia(nomeCompanhia) {
    cy.get('.MuiDialogTitle-root')
    .should('have.text', `Remover ${nomeCompanhia}?`)
    .get(el.btnDialogConfirmar)
    .should("be.visible")
    .click( { force: true} );
  }

  clicarCancelarRemoverCompanhia(nomeCompanhia) {
    cy.get('.MuiDialogTitle-root')
    .should('have.text', `Remover ${nomeCompanhia}?`)
    .get(el.btnDialogCancelar)
    .should("be.visible")
    .click( { force: true} );
  }

  preencherCampos(novoNome, campo) {
    cy.get(campo, {timeout : 30000})
    .focus()
    .click()
    .clear()
    .type(novoNome)
    .should("not.have.value", "")
    .blur()
  }
  
  validarCamposObrigatorios() {
    cy.get(el.blocoValidacao)
    .contains("Campo obrigatório!")
  }

  limparCampodeEdicao(campo) {
      cy.get(el.btnSubmit, {timeout : 30000})
      .scrollIntoView()
      .should("be.visible").should("have.text", "Salvar")
      cy.get(campo, {timeout : 30000})
      .focus()
      .dblclick({ force: true })
      .clear()
      .clear()
  }

  validarCompanhiaAdicionada() {
    cy.get(el.msgValidacao, {timeout:1500})
    .should("have.text", "Companhia cadastrada com sucesso!");
  }

  validarEditarCompanhia() {
    cy.get(el.msgValidacao, {timeout:1500})
    .should("have.text", "Companhia atualizada com sucesso!");
  }  

  validarTelaListagemCompanhia() {
    cy.get('h1').contains("Lista de Companhias")
    .scrollIntoView()
    .should("be.visible")
  }

  validarCompanhiaEstadoMudou() {
    cy.get('.MuiSnackbar-root > .MuiPaper-root', {timeout:1500}).then(($msg) => {
      if ($msg.text().includes('Companhia bloqueada'))
        cy.get(el.msgValidacao).should('have.text', 'Companhia bloqueada com sucesso!')

      else if ($msg.text().includes('Companhia desbloqueada'))
        (cy.get(el.msgValidacao).should('have.text', 'Companhia desbloqueada com sucesso!'))
    })
  }

  validarCompanhiaRemovida() {
    cy.get(el.msgValidacao, {timeout:1500})
    .should('have.text', 'Companhia removida com sucesso!')
  }

  validarCompanhiaEstadoMudouNoEditar() {
    cy.get('.MuiSnackbar-root > .MuiPaper-root', {timeout:1500}).then(($msg) => 
      {
      if ($msg.text().includes('Companhia bloqueada'))
        cy.get(el.msgValidacao).should('have.text', 'Companhia bloqueada com sucesso!')
      else 
        cy.get(el.msgValidacao).should('have.text', 'Companhia desbloqueada com sucesso!')
      })
    }

  recarregarPagina() {
    cy.reload()
  }

  validarCampoObrigatorio() {
    cy.get(el.mensagemCampoObrigatorio, {timeout:1500})
    cy.contains("Campo obrigatório!");

  }

  validarIdExistente() {
    cy.get(el.msgValidacao, {timeout:1500})
    .should('have.text', "Parâmetros incorretos");
  }

  validarCompanhiaComParceiroAssociado() {
    cy.get(el.msgValidacao, {timeout:1500})
    .should('have.text', 'Não é possível remover uma companhia com um parceiro cadastrado')
  }

  validarBotaoDesabilitado() {
    cy.get(el.btnSubmit, {timeout:2000})
    .should('be.disabled')
  }

}
export default new Companhia();
