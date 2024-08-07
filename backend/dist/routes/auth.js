"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controllers/auth");
const router = express_1.default.Router();
router.route("/register").post(auth_1.register);
router.route("/login").post(auth_1.login);
router.route("/userinfo/:id").get(auth_1.getUserInfo);
router.route("/teste").get(auth_1.testeRota);
exports.default = router;
