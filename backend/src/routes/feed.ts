import express, { Request, Response, Router } from "express";

import { getfeed } from "../controllers/feed";

const router = express.Router();

router.route("/").get(getfeed);
export default router;
