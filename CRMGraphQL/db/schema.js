const { gql } = require('apollo-server-core');

//schema
const typeDefs = gql`
  type Curso {
    titulo: String
  }
  type Tecnologia {
    tecnologia: String
  }

  input CursoInput {
    tecnologia: String
  }

  type Query {
    obtenerCursos(tec: CursoInput!): [Curso]
    obtenerTecnologia: [Tecnologia]
  }
`;

module.exports = typeDefs;
