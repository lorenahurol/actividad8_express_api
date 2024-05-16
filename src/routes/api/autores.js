// Peticiones que llegan a /api/autores.

const router = require("express").Router();

const { getAllAutores, createAutor } = require("../../controllers/autores.controller");

// Mapeo: Las peticiones GET y POST sobre la url api/autores, la gestiona el controlador:
router.get("/", getAllAutores);
router.post("/", createAutor);



module.exports = router;