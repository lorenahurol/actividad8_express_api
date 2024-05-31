// Peticiones que llegan a /api/posts.

const router = require("express").Router();

const { getAllPosts, getPostById, getPostsByAuthor, createPost, updatePost, deletePost } = require("../../controllers/posts.controller");

// Mapeo:
router.get("/", getAllPosts);
router.get("/:post_id", getPostById);
// Url para obtener los posts de un autor en concreto:
router.get("/autor/:autor_id", getPostsByAuthor);
router.post("/", createPost);

// Extra: rutas para actualización y borrado:
router.put("/:post_id", updatePost);
router.delete("/:post_id", deletePost);


module.exports = router;