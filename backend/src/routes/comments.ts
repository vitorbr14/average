import express, { Request, Response, Router } from "express";

import {
  allComentsFromArticle,
  getUserNameForCommentary,
  newComment,
} from "../controllers/comments";

const router = express.Router();

router.route("/").post(newComment);

export default router;
