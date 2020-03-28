const express = require('express');
const cors = require('cors');



const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 *  Rota / Recurso
 */

 /**
 *  Metodos HTTP
 * 
 *  GET: Buscar informação no Back End
 *  POST: Criar uma informação no Back End
 *  PUT: Alterar uma informação no Back End
 *  DELETE: Deletar uma informação no Back End
 */

 /**
 *  Tipos de parâmetros
 * 
 *  Query Params: parametros nomeados enviados na rota após o ? (Filtros, paginação)
 *  Route Params: parametros utilizados para identificar recursos
 *  Body: 
 * 
*/

 /**
 *  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 *  NoSQL: MongoDV, CouchDB, etc
 * 
 *  Driver: SELECT * FROM tabela
 *  Query Biulder: table('users').select(*).where();
 */


app.listen(3333);