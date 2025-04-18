const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 10000;

app.use(express.json());
// Ruta de prueba
app.get('/', (req, res) => {
  res.send('🚀 Bienvenido a la API de Maybelline Shop');
});

// Modelo Pedido
const Pedido = mongoose.model('Pedido', new mongoose.Schema({
  cliente: String,
  producto: String,
  cantidad: Number,
  precioUnitario: Number,
}));

// Rutas para pedidos
app.get('/pedidos', async (req, res) => {
  const pedidos = await Pedido.find();
  res.json(pedidos);
});

app.post('/pedidos', async (req, res) => {
  const pedido = new Pedido(req.body);
  await pedido.save();
  res.json(pedido);
});
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Tus rutas aquí...

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

