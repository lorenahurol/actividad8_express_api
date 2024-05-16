// Peticiones que llegan a /api/autores.

const router = require("express").Router();

const { getAllAuthors, createAuthor, getAuthorById } = require("../../controllers/autores.controller");

// Mapeo: Las peticiones GET y POST sobre la url api/autores, la gestiona el controlador:
router.get("/", getAllAuthors);
router.get("/:autor_id", getAuthorById);
router.post("/", createAuthor);



module.exports = router;