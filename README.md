Projeto de automação em cypress

Para executar o projeto deve ter o node instalado e seguir os seguintes passos:

### Instalação e uso da arquitetura
-----------------------
- Instale o [Node.js](https://nodejs.org/en/download/);
- Baixe este repositório ou faça um git clone;
- Abra o diretório do projeto e execute o comando:
    - `npm install`
- Para abrir a interface de execução do Cypress, execute no diretório do projeto:
    - `npm run cy:open`

```
cypress4testautomationapi/
	├─  cypress/
		│        
		│  
		│        
		├── fixtures/
		│    ├── *.json      
		│  	 ├── *.csv   	
		│    └── *.png    
		│   
		├── integration/  
		│    ├── <categorias>/   
		│	 │		└── <steps.js>/
		│    └── <Features>Tests.Features
		│        
		├── plugins/
		│    └── index.js 
		│        
		├── reports/
		│	 └── cucumber-json/
		│	 └── cucumberfiles (*.json, *html) 
		│
		├── support/    
		│	 └── Pages/
		│	 │		└── <Menus>/
		│    │    			└── <index>/
		│	 │				└── <elements>/
		│    └── videos/    
	    │   
		├── environmentsConfig/  
		├── node_modules/  
		├── cypress.json  
		├── package-lock.json  
		├── package.json  
		└── README.md```
```


## Camadas da arquitetura
 - **fixtures:** arquivos para massa de dados estática para os testes (csv, png, xlsx, txt);
 - **integration:** arquivos de testes separados em categorias/módulos;
 - **plugins:** plugins que são utilizados na solução ficam dentro do arquivo "plugins/index.js"; -
 - **reports:** diretório com o relatório de execução dos testes; - 
 - **support:** camada com comandos Cypress customizados e sobrescritas globais: -
 - **videos:** geração opcional de videos das execução dos testes; - 
 - **environmentsConfig:** diretório com os arquivos de configuração por ambiente; - 
 - **node_modules:** arquivos ou diretórios que podem ser carregados pelo Node.js; - 
 - **cypress.json:** arquivo de configuração do Cypress; - 
 - **package-lock.json:** gerado automaticamente com as instalações e atualizações de pacotes; -
 
## Plugins Necessários
 - **Cucumber (Gherkin) Full Support** -
 - **Cuke Step Definition Generator** -
 - **Cypress Helper** -
 - **Cypress Snippets** -
 - **YAML** -
