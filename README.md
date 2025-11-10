# Teste de Automação Web – Automation Exercise  



## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) (v18 ou superior)  
- [WebdriverIO](https://webdriver.io/)  
- [Mocha](https://mochajs.org/)  
- [Allure Reports](https://docs.qameta.io/allure/)  
- [Faker.js](https://fakerjs.dev/)  
- [GitHub Actions](https://github.com/features/actions) (para CI/CD)


<br>
<br>

 ## Pré-requisitos

Antes de iniciar, verifique se você tem instalado:

- **Node.js** (versão 18 ou superior)  
- **npm** (gerenciador de pacotes do Node)  
- **Git** configurado 

<br>
<br>


##  Instalação via terminal

1. **Clone o repositório usando os comandos abaixo**

```bash
git clone https://github.com/adamcy11/qa.automationexercise-web.webdriverio.git
```

2. **Acesse a pasta do projeto pelo terminal (Entre na pasta clonada também pelo editor para a visualização do código)**

```bash
cd qa.automationexercise-web.webdriverio
```
3. **Instale as dependências:**

```bash
npm install
```
<br>
<br>

## Executando os Testes

1. **Rodar todos os testes**
```bash
npx wdio run wdio.conf.js
```


2. **Executar uma suíte específica**

- Executa cenários relacionados ao cadastro de usuário:
```bash
npx wdio run wdio.conf.js --suite register
```
- Executa cenários de busca e adição de produtos ao carrinho:
```bash
npx wdio run wdio.conf.js --suite products
```

- Executa cenários de comportamentos dentro do carrinho de compras, como quantidade e remoção:
```bash
npx wdio run wdio.conf.js --suite cart
```
<br>
<br>

## Após a execução dos testes, o relatório é gerado automaticamente pelo **Allure Reports**.

- **abrir o relatório localmente**
  
   ```bash
   npm run allure:report
   ```
