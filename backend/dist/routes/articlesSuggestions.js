"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articlesSuggestions_1 = require("../controllers/articlesSuggestions");
const router = express_1.default.Router();
router.route("/:userid").get(articlesSuggestions_1.getAllArticlesFromUser);
router.route("/category/:id").get(articlesSuggestions_1.getAllArticlesFromCategory);
router.route("/shuffled/:userid").get(articlesSuggestions_1.getAllArticlesShuffled);
router.route("/deleteall").delete(articlesSuggestions_1.deleteall);
exports.default = router;
