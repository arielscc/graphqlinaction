const { ApolloServer, gql } = require('apollo-server');

//schema
const typeDefs = gql`
  type Curso {
    titulo: String
    tecnologia: String
  }

  type Query {
    obtenerCursos: Curso
  }
`;

//data
const cursos = [
  {
    titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
    tecnologia: 'JavaScript ES6',
  },
  {
    titulo: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
    tecnologia: 'React',
  },
  {
    titulo: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
    tecnologia: 'Node.js',
  },
  {
    titulo: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
    tecnologia: 'React',
  },
];

//resolvers -> son un objeto
const resolvers = {
  Query: {
    obtenerCursos: () => {
      // Logica para consultar la base de datos
      return cursos[0];
    },
  },
};

//servidor apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//arrancando el servidor
server.listen().then(({ url }) => {
  return console.log(`servidor listo en: ${url}`);
});
