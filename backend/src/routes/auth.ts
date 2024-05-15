import express, { Request, Response, Router } from "express";
import { register, login, getUserInfo } from "../controllers/auth";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/userinfo/:id").get(getUserInfo);

export default router;
