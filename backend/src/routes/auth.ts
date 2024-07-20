import express, { Request, Response, Router } from "express";
import { register, login, getUserInfo, testeRota } from "../controllers/auth";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/userinfo/:id").get(getUserInfo);
router.route("/teste").get(testeRota);
export default router;
