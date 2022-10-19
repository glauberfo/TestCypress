#language: pt
@Treinamento
Funcionalidade: Treinamento
Como usuário, desejo gerenciar o módulo companhia

    Contexto:
    Dado que eu esteja na tela home do AutoSky e faço um login com as credenciais válidas

    @firefox
    Cenário: Faça um logout
    Quando clico no botão do operador
    E clico em sair
    Então devo ser redirecionado para a tela home do AutoSky

    @firefox
    Cenário: Abrir painel de instâncias do ambiente AWS-MultiCloud do Parceiro Piloto AWS
    Quando clico na caixa de seleção de parceiros
    E seleciono o parceiro "Parceiro Piloto AWS"
    E clico no ambiente "AWS-MultiCloud" na aba ambientes e clico na opção Instancias
    Então devo ter a opção de registrar as instâncias
