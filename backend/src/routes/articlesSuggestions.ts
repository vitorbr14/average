import express, { Request, Response, Router } from "express";
import { getSingleArticle } from "../controllers/articles";
import {
  deleteall,
  getAllArticlesFromCategory,
  getAllArticlesFromUser,
  getAllArticlesShuffled,
} from "../controllers/articlesSuggestions";

const router = express.Router();

router.route("/:userid").get(getAllArticlesFromUser);
router.route("/category/:id").get(getAllArticlesFromCategory);
router.route("/shuffled/:userid").get(getAllArticlesShuffled);

router.route("/deleteall").delete(deleteall);
export default router;
