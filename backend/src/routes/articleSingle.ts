import express, { Request, Response, Router } from "express";
import { getSingleArticle } from "../controllers/articles";

const router = express.Router();

router.route("/:id/").get(getSingleArticle);
export default router;
