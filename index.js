const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 10000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Tus rutas aquí...

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
