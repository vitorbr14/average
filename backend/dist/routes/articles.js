"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articles_1 = require("../controllers/articles");
const router = express_1.default.Router();
router.route("/").post(articles_1.createArticle);
router.route("/:id/edit").patch(articles_1.editArticle);
router.route("/like/:articleid").post(articles_1.likeArticle);
router.route("/like/:comentarioid").delete(articles_1.deslikeArticle);
exports.default = router;
