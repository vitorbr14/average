import express, { Request, Response, Router } from "express";
import { createArticle, editArticle } from "../controllers/articles";

const router = express.Router();

router.route("/").post(createArticle);
router.route("/:id/edit").patch(editArticle);

export default router;
