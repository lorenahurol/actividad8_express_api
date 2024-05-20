// Fichero de arranque: crear y levantar el servidor.

// Libreria http:
const http = require("node:http");

// Traer la app de express:
const app = require("./src/app");

// Config:
    // Config .env:
    require("dotenv").config();
    // Condfig db:
    require("./src/config/db");

// Crear el servidor, con las rutas recogidas de app.js:
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on("listening", () => {
    console.log(`Servidor escuchando en ${PORT}`);
})

