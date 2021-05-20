const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolver');

//servidor apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//arrancando el servidor
const opts = {
  port: 4001,
};
server.listen().then(({ url }) => {
  return console.log(`servidor listo en: ${url}`);
});
