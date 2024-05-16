// App de Express para la gestion de las rutas.
const express = require("express");

// Crear la app:
const app = express();

// Middlewares:
app.use((req, res, next) => {
    
    next();
})

// Rutas: URLs de la aplicacion.
app.use("/api", require("./routes/api"));



// Exports:
module.exports = app;