// Peticiones que llegan a /api/posts.

const router = require("express").Router();

const { getAllPosts, getPostById, getPostsByAuthor, createPost } = require("../../controllers/posts.controller");

// Mapeo:
router.get("/", getAllPosts);
router.get("/:post_id", getPostById);
// *** REVISAR: URL ecuperar los diferentes posts escritos por un autor en concreto *** //
router.get("/posts/autores/:autor_id", getPostsByAuthor);
router.post("/", createPost);


module.exports = router;