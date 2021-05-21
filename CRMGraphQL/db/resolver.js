//resolvers -> son un objeto
const resolvers = {
  Query: {
    obtenerCurso: () => 'un curso!',
  },
  Mutation: {
    nuevoUsuario: () => 'este es el usuario',
  },
};

module.exports = resolvers;
