const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
  await mongoose
    .connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      console.log('🆗 [db] Conectada con exito');
    });
  try {
  } catch (error) {
    console.log('❌ [db] Error en la conexión ', error);
  }
};

module.exports = conectarDB;
