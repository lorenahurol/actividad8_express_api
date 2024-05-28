// Peticiones que llegan a /api/autores.

const router = require("express").Router();

const { getAllAuthors, createAuthor, getAuthorById, deleteAuthor, updateAuthor } = require("../../controllers/autores.controller");

// Mapeo: Las peticiones GET y POST sobre la url api/autores, la gestiona el controlador.
// Rutas para obtención y creación:
router.get("/", getAllAuthors);
router.get("/:autor_id", getAuthorById);
router.post("/", createAuthor);

// Extra: rutas para actualización y borrado:
router.put("/:autor_id", updateAuthor);
router.delete("/:autor_id", deleteAuthor);



module.exports = router;