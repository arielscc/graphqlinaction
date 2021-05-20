const { gql } = require('apollo-server-core');

//schema
const typeDefs = gql`
  type Query {
    obtenerUsuario: String
  }
`;

module.exports = typeDefs;
