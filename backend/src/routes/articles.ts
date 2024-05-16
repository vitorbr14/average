import express, { Request, Response, Router } from "express";
import {
  createArticle,
  deslikeArticle,
  editArticle,
  getLikesArticle,
  likeArticle,
} from "../controllers/articles";

const router = express.Router();

router.route("/").post(createArticle);
router.route("/:id/edit").patch(editArticle);
router.route("/like/:articleid").post(likeArticle);
router.route("/like/:comentarioid").delete(deslikeArticle);
export default router;
