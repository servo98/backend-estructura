import http from 'http';

const port = 3000;
const server = http.createServer();

server.on('listening', () => {
  console.log(`Servidor escuchando en el puerto ${port} ✅`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Elige otro puerto, el puerto ${port} ya está en uso`);
  }
  console.log(`Ha ocurrido un error en el servidor 🟥 ${error.code}`);
});

server.listen(port);
