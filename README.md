# Learn PassportJs
----
É um projeto de aprendizagem que inclui ExpressJS, ChaiJS, SequelizeJS e outros.

## Introdução
Criação de um cadastro de usuário, com login e permissão de acesso a outras páginas utilizando ExpressJS e PassportJS.

## Motivação 
Necessidade de aprendizado de novas técnicas e ferramentas para agilizar o desenvolvimento

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
### Iniciando aplicação
```batch
npm start
```
Abra seu navegador de preferência em [http://localhost:3000](http://localhost:3000).
### Criando Configurações
...em process

### Criando Testes
...em process

## Conclusão
...em process

## Referências


----
