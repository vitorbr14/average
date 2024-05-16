import express, { Request, Response, Router } from "express";
import { getLikesArticle, getSingleArticle } from "../controllers/articles";

const router = express.Router();

router.route("/:id/").get(getSingleArticle);

router.route("/like/:articleid").get(getLikesArticle);
export default router;
