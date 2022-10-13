const faker = require("faker");
faker.locale = "pt_BR";
import CompanhiaPage from "../../support/pages/CompanhiaPage";
import Login from "../../support/pages/LoginPage";
import AmbienteMenuPage from "../../support/pages/AmbienteMenuPage";
import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
const el = require("../../support/pages/CompanhiaPage/elements").ELEMENTS;
const randomNumber = faker.random.number({min:900000, max:2000000}).toString();

Given(/^que eu esteja na tela home e seleciono Companhia AWS e Parceiro Piloto$/, () => {
  cy.visit("/");
  Login.validarTelaLogin();
  AmbienteMenuPage.clicarSelecionarCompanhia("Companhia AWS");
  AmbienteMenuPage.SelectParcPiloto();
});

// Adição de Companhias (Menu Lateral)
When(/^clico no menu lateral e seleciono adicionar companhia$/, () => {
  CompanhiaPage.clicarMenuLateral()
  CompanhiaPage.clicarAdicionarCompanhia()
})

//Edição de Companhia
When(/^clico no menu lateral e seleciono listar companhia$/, () => {
  CompanhiaPage.clicarMenuLateral()
  CompanhiaPage.clicarListarCompanhia()
});

//Remover Companhia dentro da tela de edição
When(/^clico no botão remover companhia$/, () => {
  CompanhiaPage.clicarRemoverCompanhiaEmEditar()
});


// Inclusão de dados na adição de companhia
And(/^faço a inclusão de um id do Zoho aleatório$/, () => {
  CompanhiaPage.preencherCampos(randomNumber, el.inputIdZoho);
});

And(/^faço a inclusão da razão social para "([^"]*)"$/, (novaRazaoSocial) => {
  CompanhiaPage.preencherCampos(novaRazaoSocial, el.inputRazaoSocial);
});

And(/^faço a inclusão do nome da companhia para "([^"]*)"$/, (novoNomeCompanhia) => {
  CompanhiaPage.preencherCampos(novoNomeCompanhia, el.inputNomeCompanhia);
});

And(/^faço a inclusão do nome do responsável para "([^"]*)"$/, (novoNomeResp) => {
  CompanhiaPage.preencherCampos(novoNomeResp, el.inputNomeResp);
});

And(/^faço a inclusão do e-mail para "([^"]*)"$/, (novoEmailResp) => {
  CompanhiaPage.preencherCampos(novoEmailResp, el.inputEmailResp);
});

And(/^faço a inclusão do telefone para "([^"]*)"$/, (novoFoneResp) => {
  CompanhiaPage.preencherCampos(novoFoneResp, el.inputFoneResp);
});

And(/^clico no menu de opções e seleciono editar companhia$/, () => {
  CompanhiaPage.clicarBotaoOpcoes()
  CompanhiaPage.clicarEditarCompanhia()
});

And(/^faço a edição do id do Zoho para$/, () => {
  CompanhiaPage.editarCampos(randomNumber, el.inputIdZoho)
});

And(/^faço a edição do id do Zoho para um existente "([^"]*)"$/, (novoIdZoho) => {
  CompanhiaPage.editarCampos(novoIdZoho, el.inputIdZoho)
});

And(/^faço a edição da Razão social para "([^"]*)"$/, (novaRazao) => {
  CompanhiaPage.editarCampos(novaRazao, el.inputRazaoSocial)
});

And(/^faço a edição do nome da companhia para "([^"]*)"$/, (novoNomeComp) => {
  CompanhiaPage.editarCampos(novoNomeComp, el.inputNomeCompanhia) 
});

And(/^faço a edição do nome do responsável para "([^"]*)"$/, (novoNomeResp) => {
  CompanhiaPage.editarCampos(novoNomeResp, el.inputNomeResp)
});

And(/^faço a edição do email do responsável para "([^"]*)"$/, (novoEmailResp) => {
  CompanhiaPage.editarCampos(novoEmailResp, el.inputEmailResp)
});

And(/^faço a edição do telefone de contato do responsável para "([^"]*)"$/, (novoFoneResp) => {
  CompanhiaPage.editarCampos(novoFoneResp, el.inputFoneResp)
});

And(/^clico no botão salvar$/, () => {
  CompanhiaPage.salvarCampos()
});

And(/^seleciono a primeira companhia a ser editada$/, () => {
  CompanhiaPage.clicarBotaoOpcoes()
});

And(/^seleciono editar companhia$/, () => {
  CompanhiaPage.clicarEditarCompanhia()
})

And(/^clico no menu de opções$/, () => {
  CompanhiaPage.clicarBotaoOpcoes()
});

And(/^clico no botão Bloquear ou Desbloquear Companhia na tela de edição$/, () => {
  CompanhiaPage.mudaEstadoCompanhiaListar()
});

And(/^clico em confirmar$/, () => {
  CompanhiaPage.clicarConfirmarMudancaCompanhia()
});

// Incluir Companhia
And(/^clico no botão para salvar a nova companhia$/, () => {
  CompanhiaPage.salvarCampos()
});

// Buscar Companhia (Tela de Listagem)
And(/^procuro pela companhia "([^"]*)"$/, (buscaCompanhia) => {
  CompanhiaPage.pesquisarCompanhia(buscaCompanhia)
})

And(/^clico no botão de opções da Companhia retornada$/, () => {
  CompanhiaPage.clicarBotaoOpcoes()
})

// Mudança de Estado
And(/^clico no botão Bloquear ou Desbloquear Companhia$/, () => {
  CompanhiaPage.mudaEstadoCompanhia()
})

And(/^clico no botão Remover Companhia$/, () => {
  CompanhiaPage.removerCompanhia()
})

And(/^clico no botão Confirmar$/, () => {
  CompanhiaPage.clicarConfirmarMudancaCompanhia()
})

And(/^clico no botão Cancelar Bloqueio$/, () => {
  CompanhiaPage.clicarCancelarMudancaCompanhia()
})

And(/^clico no botão Confirmar Remoção para "([^"]*)"$/, (nomeCompanhia) => {
  CompanhiaPage.clicarConfirmarRemoverCompanhia(nomeCompanhia)
})

And(/^clico no botão Cancelar Remoção para "([^"]*)"$/, (nomeCompanhia) => {
  CompanhiaPage.clicarCancelarRemoverCompanhia(nomeCompanhia)
})

And(/^verifico se o botão Salvar está desabilitado$/, () => {
  CompanhiaPage.validarBotaoDesabilitado()
})

// Validação
Then(/^devo visualizar a tela de listagem das companhias$/, () => {
  CompanhiaPage.validarTelaListagemCompanhia()
});

Then(/^devo visualizar o feedback de Companhia criada com sucesso$/, () => {
  CompanhiaPage.validarCompanhiaAdicionada()
})

Then(/^devo visualizar o feedback de Companhia Bloqueada ou Desbloqueada$/, () => {
  CompanhiaPage.validarCompanhiaEstadoMudou()
})

Then(/^devo visualizar o feedback de Companhia Removida$/, () => {
  CompanhiaPage.validarCompanhiaRemovida()
})


Then(/^o sistema retorna para tela de listagem e valida que as alterações foram salvas com sucesso$/, () => {
  CompanhiaPage.validarEditarCompanhia()
});

Then(/^devo visualizar o feedback de Companhia Bloqueada ou Desbloqueada em edição$/, () => {
  CompanhiaPage.validarCompanhiaEstadoMudouNoEditar()
});

// Casos de exceção / cancelar
And(/^verifico na tela a mensagem de campo obrigatório$/, () => {
  CompanhiaPage.validarCamposObrigatorios()
})

And(/^recarrego a página$/, () => {
  CompanhiaPage.recarregarPagina()
})

And(/^clico no botão Cancelar$/, () => {
  CompanhiaPage.cancelarCampos()
})

And (/^apago os dados do Id Zoho$/, () => {
  CompanhiaPage.limparCampodeEdicao( el.inputIdZoho)
});

And (/^apago os dados da Razão Social$/, () => {
  CompanhiaPage.limparCampodeEdicao( el.inputRazaoSocial)
});

And (/^apago os dados do nome da Companhia$/, () => {
  CompanhiaPage.limparCampodeEdicao( el.inputNomeCompanhia)
});

And (/^apago os dados do nome do responsável$/, () => {
  CompanhiaPage.limparCampodeEdicao( el.inputNomeResp)
});

And (/^apago os dados do telefone do responsável$/, () => {
  CompanhiaPage.limparCampodeEdicao( el.inputFoneResp)
});

Then(/^o sistema continua na tela de edição para preenchimento dos campos requiridos$/, () => {
  CompanhiaPage.validarCampoObrigatorio()
});


Then(/^o sistema continua na tela de edição e retorna uma mensagem de erro$/, () => {
  CompanhiaPage.validarIdExistente()
});

Then(/^devo visualizar o feedback da impossibilidade de excluir uma companhia com parceiro associado$/, () => {
  CompanhiaPage.validarCompanhiaComParceiroAssociado()
});

afterEach(() => {
  Login.logout()
})
