const mongoose = require('mongoose');

const modelUsuario = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trum: true,
  },
  apellido: {
    type: String,
    required: true,
    trum: true,
  },
  email: {
    type: String,
    required: true,
    trum: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trum: true,
  },
  creado: {
    type: Date,
    default: Date.now(),
  },
});

const UsuarioModel = mongoose.model('Usuario', modelUsuario);

module.exports = UsuarioModel;
