//resolvers -> son un objeto
const resolvers = {
  Query: {
    obtenerCurso: () => 'un curso!',
  },
  Mutation: {
    nuevoUsuario: (_, { input }, ctx) => {
      console.log(input);

      return 'usuario creado';
    },
  },
};

module.exports = resolvers;
