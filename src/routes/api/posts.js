// Peticiones que llegan a /api/posts.

const router = require("express").Router();

const { getAllPosts, createPost } = require("../../controllers/posts.controller");

// Mapeo:
router.get("/", getAllPosts);
router.post("/", createPost);


module.exports = router;