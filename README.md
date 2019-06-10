# Back-end para Registro de praças

## Setup

Check o arquivo .env, tenha certeza de que os dados de conexão com o banco é valido, e o banco existe.

HOST=127.0.0.1 // localhot

PORT=3333 // porta que ira rodar a aplicação

NODE_ENV=development

APP_NAME=Pracas-api

APP_URL=http://${HOST}:${PORT}

CACHE_VIEWS=false

APP_KEY=RivrFms6YPLnziMcEh6DS8Cdr4ini5cL // key gerada pelo adonis

DB_CONNECTION=mysql // drive de conexão com banco

DB_HOST=127.0.0.1 // endereço do banco

DB_PORT=3306 // porta de acesso ao banco

DB_USER=root // usuario do banco 

DB_PASSWORD= // senha do banco

DB_DATABASE=pracas_db // nome do banco de dados 

HASH_DRIVER=bcrypt

*Somente se necessario ```bash npm i -g @adonisjs/cli ```
```bash
 npm i 
```
```js
adonis migration:run
```
```bash
 npm run start
```
