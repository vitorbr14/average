"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comments_1 = require("../controllers/comments");
const router = express_1.default.Router();
router.route("/").post(comments_1.newComment);
router.route("/:id").get(comments_1.allComentsFromArticle);
router.route("/getuser/:userid").get(comments_1.getUserNameForCommentary);
exports.default = router;
