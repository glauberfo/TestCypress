#language: pt
@Companhia
Funcionalidade: Companhia
Como usuário, desejo gerenciar o módulo companhia

    Contexto:
    Dado que eu esteja na tela home e seleciono Companhia AWS e Parceiro Piloto

    @firefox
    Cenário: Listar companhias
    Quando clico no menu lateral e seleciono listar companhia
    Então devo visualizar a tela de listagem das companhias

    @automatizado @firefox @chrome
    Cenário: Adicionar companhia
    Quando clico no menu lateral e seleciono adicionar companhia
    E faço a inclusão de um id do Zoho aleatório
    E faço a inclusão da razão social para "Teste Companhia ABCD LTDA."
    E faço a inclusão do nome da companhia para "Teste Companhia ABCD"
    E faço a inclusão do nome do responsável para "Eduardo"
    E faço a inclusão do e-mail para "eduardo.taliani@skyone.solutions"
    E faço a inclusão do telefone para "551133221199"
    E clico no botão para salvar a nova companhia
    Então devo visualizar o feedback de Companhia criada com sucesso

    @automatizado  @firefox @chrome
    Cenário: Adicionar companhia com dados faltantes
    Quando clico no menu lateral e seleciono adicionar companhia
    E faço a inclusão de um id do Zoho aleatório
    E verifico na tela a mensagem de campo obrigatório
    # Razão social omitida
    E faço a inclusão do nome da companhia para "Teste Companhia ABCD"
    E verifico na tela a mensagem de campo obrigatório
    E verifico se o botão Salvar está desabilitado
    E faço a inclusão do nome do responsável para "Eduardo"
    E verifico na tela a mensagem de campo obrigatório
    E verifico se o botão Salvar está desabilitado
    E faço a inclusão do e-mail para "eduardo.taliani@skyone.solutions"
    E verifico na tela a mensagem de campo obrigatório
    E verifico se o botão Salvar está desabilitado
    E faço a inclusão do telefone para "551133221199"
    E verifico na tela a mensagem de campo obrigatório
    E verifico se o botão Salvar está desabilitado
    E clico no botão Cancelar
    Então devo visualizar a tela de listagem das companhias

    @automatizado  @firefox @chrome
    Cenário: Cancelar adição de companhia
    Quando clico no menu lateral e seleciono adicionar companhia
    E faço a inclusão de um id do Zoho aleatório
    E faço a inclusão da razão social para "Teste Companhia ABCD LTDA."
    E faço a inclusão do nome da companhia para "Teste Companhia ABCD"
    E faço a inclusão do nome do responsável para "Eduardo"
    E faço a inclusão do e-mail para "eduardo.taliani@skyone.solutions"
    E faço a inclusão do telefone para "551133221199"
    E clico no botão Cancelar
    Então devo visualizar a tela de listagem das companhias

    @automatizado @firefox-specific
    Cenário: Cancelar remoção companhia
    Quando clico no menu lateral e seleciono listar companhia
    E procuro pela companhia "Teste Companhia ABCD"
    E clico no botão de opções da Companhia retornada
    E clico no botão Remover Companhia
    E clico no botão Cancelar Remoção para "Teste Companhia ABCD"
    Então devo visualizar a tela de listagem das companhias

    @automatizado
    Cenário: Cancelar mudança do estado da companhia
    Quando clico no menu lateral e seleciono listar companhia
    E procuro pela companhia "Teste Companhia ABCD"
    E clico no botão de opções da Companhia retornada
    E clico no botão Bloquear ou Desbloquear Companhia
    E clico no botão Cancelar Bloqueio
    Então devo visualizar a tela de listagem das companhias

    @automatizado @firefox-specific
    Cenário: Muda o estado da companhia
    Quando clico no menu lateral e seleciono listar companhia
    E procuro pela companhia "Teste Companhia ABCD"
    E clico no botão de opções da Companhia retornada
    E clico no botão Bloquear ou Desbloquear Companhia
    E clico no botão Confirmar
    Então devo visualizar o feedback de Companhia Bloqueada ou Desbloqueada


    @automatizado
    Cenário: Remover companhia
    Quando clico no menu lateral e seleciono listar companhia
    E procuro pela companhia "Teste Companhia ABCD"
    E clico no botão de opções da Companhia retornada
    E clico no botão Remover Companhia
    E clico no botão Confirmar Remoção para "Teste Companhia ABCD"
    Então devo visualizar o feedback de Companhia Removida

    @automatizado
    Cenário: Adicionar companhia
    Quando clico no menu lateral e seleciono adicionar companhia
    E faço a inclusão de um id do Zoho aleatório
    E faço a inclusão da razão social para "Alan Corporate LTDA."
    E faço a inclusão do nome da companhia para "Alan Company"
    E faço a inclusão do nome do responsável para "Alan"
    E faço a inclusão do e-mail para "alan.pereira@skyone.solutions"
    E faço a inclusão do telefone para "551144332288"
    E clico no botão para salvar a nova companhia
    Então devo visualizar o feedback de Companhia criada com sucesso

    # TODO: Criar cenário de criação de uma companhia e 
    # um parceiro atrelado a ela para testar esse caso.
    @automatizado
    Cenário: Remover companhia com parceiro atrelado
    Quando clico no menu lateral e seleciono listar companhia
    E procuro pela companhia "Biguh LTDA"
    E clico no botão de opções da Companhia retornada
    E clico no botão Remover Companhia
    E clico no botão Confirmar Remoção para "Biguh LTDA"
    Então devo visualizar o feedback da impossibilidade de excluir uma companhia com parceiro associado

    @automatizado
    Cenário: Cancelar Edição de companhia na tela de edição
    Quando clico no menu lateral e seleciono listar companhia
    E procuro pela companhia "Alan Company"
    E clico no menu de opções 
    E seleciono editar companhia
    E faço a edição do id do Zoho para
    E faço a edição da Razão social para "Teste Companhia LTDA."
    E faço a edição do nome da companhia para "Editando  Alan Company"
    E faço a edição do nome do responsável para "Alan"
    E faço a edição do email do responsável para "Alan@sky.com"
    E faço a edição do telefone de contato do responsável para "5511940028922"
    E clico no botão Cancelar
    Então devo visualizar a tela de listagem das companhias

    @automatizado
    Cenário: Editar uma companhia
    Quando clico no menu lateral e seleciono listar companhia
    E procuro pela companhia "Alan Company"
    E clico no menu de opções 
    E seleciono editar companhia
    E faço a edição do id do Zoho para
    E faço a edição da Razão social para "Teste Companhia LTDA."
    E faço a edição do nome da companhia para "Editando Alan Company"
    E faço a edição do nome do responsável para "Alan"
    E faço a edição do email do responsável para "Alan@sky.com"
    E faço a edição do telefone de contato do responsável para "5511940028922"
    E clico no botão salvar
    Então o sistema retorna para tela de listagem e valida que as alterações foram salvas com sucesso

    @automatizado
    Cenário: Editar uma Companhia inserindo o mesmo Id do Zoho
    Quando clico no menu lateral e seleciono listar companhia
    E procuro pela companhia "Teste Companhia"
    E clico no menu de opções
    E seleciono editar companhia
    E faço a edição do id do Zoho para um existente "9876"
    E clico no botão salvar
    Então o sistema continua na tela de edição e retorna uma mensagem de erro

    @automatizado
    Cenário: Editar Companhia deixando algum campo sem preencher
    Quando clico no menu lateral e seleciono listar companhia
    E procuro pela companhia "Alan Company"
    E clico no menu de opções e seleciono editar companhia

    E apago os dados do Id Zoho
    E clico no botão salvar
    E o sistema continua na tela de edição para preenchimento dos campos requiridos
    E faço a inclusão de um id do Zoho aleatório

    E apago os dados da Razão Social
    E clico no botão salvar
    E o sistema continua na tela de edição para preenchimento dos campos requiridos
    E faço a inclusão da razão social para "Teste Alan Company"

    E apago os dados do nome da Companhia
    E clico no botão salvar
    E o sistema continua na tela de edição para preenchimento dos campos requiridos
    E faço a inclusão do nome da companhia para "Alan Company"

    E apago os dados do nome do responsável
    E clico no botão salvar
    E o sistema continua na tela de edição para preenchimento dos campos requiridos
    E faço a inclusão do nome do responsável para "Alan"

    E apago os dados do telefone do responsável
    E verifico se o botão Salvar está desabilitado
    E faço a inclusão do telefone para "551183221199"
    E clico no botão salvar

    Então o sistema retorna para tela de listagem e valida que as alterações foram salvas com sucesso


    @automatizado
    Cenário: Bloquear ou Desbloquear uma Companhia dentro da tela de edição de Companhia
    Quando clico no menu lateral e seleciono listar companhia
    E procuro pela companhia "Alan Company"
    E clico no menu de opções e seleciono editar companhia
    E clico no botão Bloquear ou Desbloquear Companhia na tela de edição
    E clico em confirmar
    Então devo visualizar o feedback de Companhia Bloqueada ou Desbloqueada em edição

    @automatizado
    Cenário: Cancelar Bloqueio ou Desbloqueio de companhia na tela de edição
    Quando clico no menu lateral e seleciono listar companhia
    E procuro pela companhia "Alan Company"
    E clico no menu de opções e seleciono editar companhia
    E clico no botão Bloquear ou Desbloquear Companhia na tela de edição
    E clico no botão Cancelar Bloqueio
    E clico no botão Cancelar
    Então devo visualizar a tela de listagem das companhias

    @automatizado
    Cenário: Cancelar remoção companhia na tela de edição
    Quando clico no menu lateral e seleciono listar companhia
    E procuro pela companhia "Alan Company"
    E clico no menu de opções e seleciono editar companhia
    E clico no botão remover companhia
    E clico no botão Cancelar Remoção para "Alan Company"
    E clico no botão Cancelar
    Então devo visualizar a tela de listagem das companhias

    @automatizado
    Cenário: Remover uma Companhia dentro da tela de edição de Companhia
    Quando clico no menu lateral e seleciono listar companhia
    E procuro pela companhia "Alan Company"
    E clico no menu de opções e seleciono editar companhia
    E clico no botão remover companhia
    E clico em confirmar
    Então devo visualizar o feedback de Companhia Removida
