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
    obtenerCursos: (_, { tec }, ctx, info) => {
      // Logica para consultar la base de datos

      const resultado = cursos.filter(
        curso => curso.tecnologia === tec.tecnologia
      );
      return resultado;
    },
  },
};

module.exports = resolvers;
