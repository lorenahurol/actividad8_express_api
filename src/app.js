// App de Express para la gestion de las rutas.
const express = require("express");

// Importacion de librerias:
const dayjs = require("dayjs");

// Crear la app:
const app = express();
// Recoger el objeto body en formato json:
app.use(express.json());

/***
// Middlewares:
***/

// Error handler:
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err.message
    });
});


// Middleware Fecha Actual:
app.use((req, res, next) => {
    const currentDate = dayjs().format("DD-MM-YYY HH:mm:ss");
    console.log(currentDate);
    req.currentDate = currentDate;
    next();
});




// Rutas: URLs de la aplicacion.
app.use("/api", require("./routes/api"));



// Exports:
module.exports = app;