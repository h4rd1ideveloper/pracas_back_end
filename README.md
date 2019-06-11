# Back-end para Registro de praças
Check o arquivo .env, tenha certeza de que os dados de conexão com o banco é valido, e que o banco existe

HOST=127.0.0.1 // caminho localhot

PORT=3333 // porta

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
```bash npm i \ adonis migration:run \ pm2 start server.js```
