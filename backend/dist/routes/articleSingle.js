"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articles_1 = require("../controllers/articles");
const router = express_1.default.Router();
router.route("/:id/").get(articles_1.getSingleArticle);
router.route("/like/:articleid").get(articles_1.getLikesArticle);
exports.default = router;
