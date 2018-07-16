# Learn PassportJs
É um projeto de aprendizagem que inclui ExpressJS, ChaiJS, SequelizeJS e outros.

----
## Introdução
Criação de um cadastro de usuário, com login e permissão de acesso a outras páginas utilizando ExpressJS e PassportJS.

----
## Motivação 
Necessidade de aprendizado de novas técnicas e ferramentas para agilizar o desenvolvimento.

----
## Referêncial Teórico
### Nodemon
O Nodemon é um utilitário que monitora quaisquer alterações na sua origem e reinicia automaticamente seu servidor^[1].
##### Instalação
```batch
npm install -g nodemon
```
##### Uso
Em vez de executa com `node index.js` use `nodemon index.js`.

### Mocha
O Mocha é um framework de teste JavaScript rico em recursos, rodando em Node.js e no navegador, tornando os testes assíncronos simples e divertidos. Os testes Mocha são executados em série, permitindo relatórios flexíveis e precisos, enquanto mapeiam exceções não detectadas para os casos de teste corretos. Hospedado no GitHub^[2].
##### Instalação
```batch
npm install -g mocha
```
##### Uso
Para executar apenas chame o mocha no diretorio: 
```batch
mocha
```

### Chai
Chai é uma biblioteca de assertiva de BDD/TDD para `node` e o navegador que pode ser deliciosamente combinado com qualquer framework de teste de javascript^[3].
##### Instalação
```batch
npm install chai 
```
##### Uso
```js
//Assertion Styles
var chai = require('chai')
  , assert = chai.assert
  , expect = chai.expect
  , should = chai.should();//actually call the function
```

### Chai-as-Promised
Chai como Promised estende Chai com uma linguagem fluente para afirmar fatos sobre promessas^[4].
##### Instalação
```batch
npm install chai-as-promised
```
##### Uso
```js
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);//add plugin

describe('Example Test', function () {
  it('resolves as promised', function() {
    return expect(Promise.resolve('woof')).to.eventually.equal('woof');
  });
  it('rejects as promised', function() {
    return expect(Promise.reject('caw')).to.be.rejectedWith('caw');
  });
});
```

### Express
...em process

### Pug


### Sequelize
...em process

### Passport
...em process

----
## Configuração
### Passo-a-passo
```batch
npm install nodemon -g
npm install express-generator -g
express --view=pug learn-passporjs
cd learn-passporjs
npm install
npm install mocha --save-dev
npm install chai --save-dev
npm install chai-as-promised --save
npm install sqlite3 --save
npm install sequelize --save
npm install passport --save
npm install passport-local --save
```
Alterando o arquivo `package.json`
```json
 "scripts": {
    "start": "nodemon ./bin/www",
    "test": "mocha"
  }
```
### Executando aplicação
```batch
npm start
```
Abra seu navegador de preferência em [http://localhost:3000](http://localhost:3000).
### Criando Configurações
...em process

### Criando Testes
...em process

----
## Conclusão
...em process

----
## Referências
1. <https://nodemon.io/>
1. <https://mochajs.org/>
1. <http://www.chaijs.com/>
1. <https://expressjs.com/>
1. <https://pugjs.org/api/getting-started.html>
1. <http://docs.sequelizejs.com/>
1. <http://www.passportjs.org/>
