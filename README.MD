Fiz um banco de dados que registra sua opinião sobre determinado filme.

Rotas:

GET ( /reviews ) > retorna todos os reviews;

POST ( /reviews ) > cria um novo review;

DELETE ( /reviews/:id ) > deleta um review de acordo com o id passado;

UPDATE ( /reviews/:id ) > atualiza o comentario de um review de acordo com o id passado.


npx dotenv -e .env.test npx jest => como rodar os testes;
npx nodemon app.ts => como rodar a aplicação;
