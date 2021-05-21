const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolver');

const conectarDB = require('./config/db');

// conectar a la DB
conectarDB();

//servidor apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//arrancando el servidor
server.listen({ port: 4001 }).then(({ url }) => {
  return console.log(`servidor listo en: ${url}`);
});
