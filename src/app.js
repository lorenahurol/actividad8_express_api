// App de Express para la gestion de las rutas.
const express = require("express");

// Importacion de librerias:
const cors = require("cors");

// Crear la app:
const app = express();
// Recoger el objeto body en formato json:
app.use(express.json());

app.use(cors());

// Rutas: URLs de la aplicacion.
app.use("/api", require("./routes/api"));

// Middleware Error 404: Ruta no encontrada:
app.use((req, res, next) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

// Middleware Error handler:
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        error: "Error del servidor",
        message: err.message
    });
});

// Exports:
module.exports = app;