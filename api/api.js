import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import authRoutes from './routes/authRoutes.js';

const api = express();

//TODO: Configurar Middlwares
api.use(express.json());

api.get('/status', (req, res) => {
  return res.json({
    msg: 'API en linea y funcionando',
  });
});

//TODO: Acá se registran las rutas
api.use(authRoutes);
api.use(bookRoutes);

export default api;
