/// <reference types="cypress" />

import { system } from "faker";

const el = require("./elements").ELEMENTS;

class Ambiente {
  clicarNaOpcaoAwsRoboPeriodos() {
    cy.clicarMenu("AWS-Robo-Periodos")
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true })
      .click();
  }

  clicarSelecionarCompanhia(companhia) {
    cy.xpath(el.modalSelCompanhia).then( modal => {
      if (modal.text().includes("Escolha um Parceiro")) {
          cy.get(el.btnSelCompanhia)
          .should('have.text', 'Selecionar companhia')
          .click({ force: true });
          this.selecionarCompanhia(companhia)
      }

      else {
        cy.get(el.clicaCompanhia)
        .should("be.visible")
        .click({ force: true });
        this.selecionarCompanhia(companhia)
      }
    })
  }

  selecionarCompanhia(companhia) {
    cy.contains(companhia, {timeout : 30000})
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }


  clicarOpcaoRobo(){
    cy.get(el.btnSelectRobo)
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true });
  }

  clicarOpcaoInstanciaRobo(){
    cy.get(el.btnInstancias)
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true });
  }

  clicarBtnAcoes(){
    cy.get(el.btnAcoes)
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true });
  }

  clicarBtnAtivarInstancia(){
    cy.get(el.btnAtivarInstancia)
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true });
  }

  clicarSelecionarAWS() {
    cy.get(el.selectParcAWS, {timeout : 30000})
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }

  noSelectParc() {
    cy.get(el.noSelectParc, {timeout : 30000})
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }

  clicarBotaoSelParcs() {
    cy.get('tbody').then(tbody => {
      if (tbody.first('tr[id*="option-list"]').length){       
          cy.get('#no-select-partner', {timeout : 30000}).click({ force: true })
      }
    })

    cy.get(el.btnSelParceiros, {timeout : 30000})
    .click();
  }

  pesquisarCompanhia(companhia) {
    cy.digitarTexto('#outlined-search', companhia, 15000, 0)
  }

  selecionarParceiroPersonalizado(parceiro) {
    this.clicarBotaoSelParcs()
    cy.contains(parceiro, {timeout: 30000}).click()
  }

  SelectParcPiloto() {
    this.clicarBotaoSelParcs()
    cy.get(el.selParceiro, {timeout : 30000})
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }

  SelectParcOCI() {
    this.clicarBotaoSelParcs()
    cy.get(el.selParceiroOCI, {timeout : 30000})
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }

  clicarListarAmbientes(){
      cy.wait(1000);
      cy.visit("https://dev-admin.autosky.cloud/environments");
  }

  clicarNaOpcaoInstancia() {
    cy.visit(
      "https://piloto.skyinone.net/admin/painel/ambiente/8708b38b-2c8a-4711-81d0-e8a05a63e647/instancias/"
    );
  }

  clicarNaOpcaoAtivarSemInstanciaAtiva() {
    cy.get('tbody', {timeout:30000}).then(($msg) => {
      cy.log($msg.text())
      if ($msg.text().includes('t2.small')) {
        cy.log("Já existe uma instancia");
      }
      else if ($msg.text().includes('Nenhuma instância encontrada.')) {
          cy.get(el.btnAcoesGerais).click({ multiple: true }).scrollIntoView();
      cy.get(el.btnAtivar)
        .scrollIntoView()
        .click({ force: true });
        
      }
    })
  }

  clicarNaOpcaoAtivar() {
    if (el.btnGerenciar == true) {
      cy.log("Já existe uma instancia");
    } else {
      cy.get(el.btnAcoesGerais).click({ multiple: true }).scrollIntoView();
      cy.get(el.btnAtivar)
        .scrollIntoView()
        .click({ force: true });
    }
  }

  clicarNaOpcao1Instancia() {
    cy.get(el.ativar1instancia).scrollIntoView().click({ force: true });
  }

  validarMensagemDeConfirmacao() {
    cy.contains("Iniciando instância...", {timeout:30000});
    this.validarCarregamento()
    cy.contains("Operacional", {timeout:30000});
  }

  validarUmaInstanciaAtiva() {
    this.validarCarregamento()
    cy.contains("t2.small", {timeout:30000}
    );
  }

  subirIntancia(){
    this.clicarNaOpcaoAwsRoboPeriodos();
    this.clicarNaOpcaoInstancia();
    this.clicarNaOpcaoAtivar();
    this.clicarNaOpcao1Instancia();
    this.validarMensagemDeConfirmacao();
  }

  selecionarTodasInstancias(){
    cy.get(el.esperarInstancias).should('be.visible');
    cy.get(el.selecionarTodasInstancias).click();
  }

  terminarInstancia(){
    cy.get(el.btnTerminarInstancia).click({force: true});

  }

  btnInstancia(){
    cy.get(el.btnInstancias).click({force: true});
    cy.pause(0)
  }

  btnMenuLateral(){
    cy.get(el.btnMenuLateral).click({force: true});
  }

  confirmarRemocao(){
    cy.get(el.botaoConfirmaTerminarInstancias).click({force: true});
  }

  validarMensagemDeTermino() {
    /*cy.wait(el.mensagemTermino1instancia).should('be.visible');*/
    cy.get(el.mensagemTermino1instancia).contains(
      "Nenhuma instância."
    );
  }

  preencherData(dataFim) {
    cy.get(el.datafimLogs)
      .scrollIntoView()
      .should("be.visible")
      .type(dataFim, { force: true })
      .should("not.have.value", "");
  }

  clicarBtnOpcoes() {
    cy.get(el.btnOpcoes, {timeout : 30000})
    .click({ force: true })
  }
  
  pesquisarAmbiente(ambiente) {
    cy.get(el.inputPesquisarAmbiente)
    .should("be.visible")
    .focus()
    .type(ambiente)
    .wait(1200)
    .should("not.have.value", "");
  }

  visitarInstanciasAWS(ambiente) {
    cy.visit('https://dev-admin.autosky.cloud/environments/8708b38b-2c8a-4711-81d0-e8a05a63e647/instances')
    cy.get('h1').should('contain.text', ambiente, {timeout : 30000})
  }

  visitarAmbiente() {
    cy.visit('/environments')
  }

  verificarExisteInstancias() {
    cy.wait(1000)
    cy.get('tbody').then(table => {
      if (table.text().includes('Nenhuma instância encontrada.')) {
        this.clicarNaOpcaoAtivar();
        this.clicarNaOpcao1Instancia();
        this.validarCarregamento()
        this.clicarInstanciaAtiva()
        // this.validarCarregamentoStatus()
      } else {
        this.validarCarregamento()
        // this.validarCarregamentoStatus()
        this.clicarInstanciaAtiva()
        return false
    }
    })
  }


  clicarAcoesInstancia() {
    cy.get('@ipInstancia').then(nome => {
      cy.contains(nome).parents('tr').find('button').click({force: true})
    })
  }


  clicarOpcoesAmbiente(ambiente) {
    cy.contains(ambiente, {timeout:25000}).parents('tr')
    .find('button').click({ force: true })
  }

  validarInstanciasAPI() {
    cy.wait('@getScaleInstance').then( (interception) => {

      expect(interception.response["statusCode"]).to.equal(200)
      
      let noInstanceFound = false
      if (interception.response.body["count"] == 0) {
        noInstanceFound = true
        cy.wrap(noInstanceFound).as('instanceCount')
      } 
      else cy.wrap(noInstanceFound).as('instanceCount')
    })
  }
  
  validarListagemAPI() {
    cy.get('@instanceCount').then( instanceCount => {
      if (instanceCount == true) {
        expect(instanceCount).to.equal(true)
        cy.log("Não há instâncias para serem listadas.")
      } else {
        cy.log("Existem instâncias no ambiente.")
      }
    })
  }
  
  clicarOpcaoInstancias(opcao) {
    if (opcao.includes("Instância")) {
      cy.intercept('GET', 'https://piloto.skyinone.net/api/v3/environment/8708b38b-2c8a-4711-81d0-e8a05a63e647/scale-instance/*').as('getScaleInstance')
      this.clicarOpcaoInstanciaRobo()
      this.validarInstanciasAPI()
    } else {
      cy.contains(opcao, {timeout : 30000})
      .click({ force: true })
    }
  }

  bloquerInstancia () {
    cy.get(el.btnBloqInstancia).click({ force: true })
  }

  desbloquearInstancia() {
    cy.get(el.btnDesbloqInstancia).click({ force: true })
  }

  validarStatusInstanciaCriada() {
  cy.get('tr td:eq(-3)', {timeout: 6000}).then( status => {
    cy.wrap(status).invoke('attr', 'tooltip').should("be.exist", "OPERACIONAL",)
    
  })
  }

  clicarInstanciaAtiva() {
    cy.get('tr').then(line => {
      cy.wrap(line).children('td').each(cell => {
        if(cell.attr('tooltip') == "OPERACIONAL") {
          this.nome = Cypress.$('tr td:eq(5)').text()
          cy.log(this.nome)
          cy.wrap(this.nome).as('ipInstancia')
          cy.get(cell).siblings('td').find('button').click({force: true})
          cy.log('Existe instância ativa')
          return false
        }
      })
    }) 
  }

  clicarBloquearDesbloquear() {
    cy.xpath(el.modalbtnAcoesInstancias).then(modal => {
      if (modal.text().includes("Bloquear Instância")){
        this.bloquerInstancia()
        this.clicarConfirmar()
        this.validarMensagemEstado()
        cy.wait(1000)
        cy.reload()
        this.clicarAcoesInstancia()
        this.desbloquearInstancia()
        this.clicarConfirmar()
      }
      else if (modal.text().includes("Desbloquear Instância")){
        this.desbloquearInstancia()
        this.clicarConfirmar()
        this.validarMensagemEstado()
        cy.wait(1000)
        cy.reload()
        this.clicarAcoesInstancia()
        this.bloquerInstancia()
        this.clicarConfirmar()
      }
    })      
  }

  clicarConfirmar() {
    cy.get(el.btnDialogConfirmar, {timeout : 30000})
    .click({ force: true })
  }


  validarTelaMonitorInstancia() {
    cy.get(el.modalMonitorInstancia, {timeout : 30000})
      cy.contains('Monitor')
      cy.get('body').click('right')
  }

  validarListagemInstancias() {
    cy.get('h1', {timeout : 30000})
      .should("contain.text", "Lista de Instâncias")
    this.validarListagemAPI()
  }

  validarTelaAlarmeLogs() {
    cy.get(el.modalMonitorInstancia, {timeout : 30000})
      cy.contains('Alarmes / Logs')
      cy.get('body').click('right')

  }  
  
  validarTelaSessoes() {
    cy.get(el.modalMonitorInstancia, {timeout : 30000})
      cy.contains('Sessões')
      cy.get('body').click('right')

  }

  validarMensagem (mensagem) {
    cy.get('.MuiSnackbar-root > .MuiPaper-root', {timeout : 30000})
    .should("have.text", mensagem)
  }

  validarMensagemEstado() {
    cy.get('.MuiSnackbar-root > .MuiPaper-root', {timeout : 30000}).then((msg) => {
      if(msg.text().includes('Instância bloq')){
      cy.get(el.msgValidacao)
      .should("have.text", "Instância bloqueada com sucesso!")
    }
      else if (msg.text().includes('Instância desbloq')) {
        cy.get(el.msgValidacao)
        .should("have.text", "Instância desbloqueada com sucesso!")
      }
    })
  }

  validarCarregamento() {
    cy.get('.MuiTableCell-root > .MuiGrid-root .MuiCircularProgress-svg', { timeout: 480000 })
    .should("not.exist");
}  

validarTerminoInstancia() {
  cy.get('@ipInstancia')
  cy.wrap('@ipInstancia', {timeout:5000}).should('not.exist')
}
// validarCarregamentoStatus() {
//   cy.get('tr td:eq(-3)', {timeout: 6000}).then( status => {
//     cy.wrap(status, {timeout: 480000}).should("not.have.attr", "tooltip", "LIGADA", {timeout: 180000})
    
//   })
// }

}
export default new Ambiente();
