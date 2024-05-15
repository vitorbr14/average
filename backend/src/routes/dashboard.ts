import express, { Request, Response, Router } from "express";
import { register, login } from "../controllers/auth";
import { getUserInfo } from "../controllers/dashboard";
const router = express.Router();

router.route("/").get(getUserInfo);

export default router;
