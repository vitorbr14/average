"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_1 = require("../controllers/categories");
const router = express_1.default.Router();
router.route("/").post(categories_1.newCategory);
router.route("/").get(categories_1.getAllCategories);
exports.default = router;
