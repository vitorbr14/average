import express, { Request, Response, Router } from "express";
import { getAllCategories, newCategory } from "../controllers/categories";

const router = express.Router();

router.route("/").post(newCategory);
router.route("/").get(getAllCategories);
export default router;
