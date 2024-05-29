// App de Express para la gestion de las rutas.
const express = require("express");

// Importacion de librerias:
const dayjs = require("dayjs");
const cors = require("cors");

// Crear la app:
const app = express();
// Recoger el objeto body en formato json:
app.use(express.json());

app.use(cors());

/***
// Middlewares:
***/

// Middleware Fecha Actual:
app.use((req, res, next) => {
    const currentDate = dayjs().format("DD-MM-YYY HH:mm:ss");
    console.log(currentDate);
    req.currentDate = currentDate;
    next();
});


// Error handler:
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err.message
    });
});


// Rutas: URLs de la aplicacion.
app.use("/api", require("./routes/api"));


// Exports:
module.exports = app;