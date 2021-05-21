const UsuarioModel = require('../models/Usuario');

//resolvers -> son un objeto
const resolvers = {
  Query: {
    obtenerCurso: () => 'un curso!',
  },
  Mutation: {
    nuevoUsuario: async (_, { input }) => {
      //Revisar si el usuario ya esta registrado
      const { email } = input;
      const existeUsuario = await UsuarioModel.findOne({ email });

      if (existeUsuario) {
        throw new Error('El usuario ya esta registrado');
      }

      //Hashear el Psw

      //Guardarlo en la base de datos
      try {
        const usuario = new UsuarioModel(input);
        usuario.save();

        return usuario;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = resolvers;
