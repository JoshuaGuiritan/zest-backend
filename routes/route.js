import express from "express";
import {
  getAccounts,
  getPosts,
  signin,
  signup,
  createPost,
} from "../controllers/postControllers.js";
const router = express.Router();

router.get("/getaccount", getAccounts);
router.get("/getposts", getPosts);
router.post("/signin", signin);
router.post("/signup", signup);
router.post("/createpost", createPost);

export default router;
