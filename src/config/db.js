// Configuracion de la Base de Datos.

const mysql = require("mysql2");

// Datos de conexion:
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})

global.db = pool.promise()