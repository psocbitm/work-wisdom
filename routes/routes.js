const express = require("express");
const getAllPostsController = require("../controllers/getAllPostsController");
const errorMiddleware = require("../middlewares/errorMiddleware");
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");
const authenticateToken = require("../middlewares/authMiddleware");
const createPostController = require("../controllers/createPostController");
const deletePostController = require("../controllers/deletePostController");
const getSinglePostController = require("../controllers/getSinglePostController");
const updatePostController = require("../controllers/updatePostController");
const router = express.Router();

router.get("/api/getAllPosts", getAllPostsController);
router.post("/api/login", loginController, errorMiddleware);
router.post("/api/signup", signupController, errorMiddleware);
router.post("/api/createPost", authenticateToken ,createPostController, errorMiddleware);
router.delete("/api/posts/:id", authenticateToken ,deletePostController, errorMiddleware);
router.patch("/api/posts/:id", authenticateToken ,updatePostController, errorMiddleware);
router.get("/api/posts/:id",getSinglePostController, errorMiddleware);

module.exports = router;
