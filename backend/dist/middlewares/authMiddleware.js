"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const api_errors_1 = require("../errors/api-errors");
const admin = require("../firebase/firebaseConfig");
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const appCheckToken = req.header("x-firebase-appcheck");
    if (!appCheckToken) {
        throw new api_errors_1.UnauthorizedError("Não autorizado.");
    }
    const token = appCheckToken === null || appCheckToken === void 0 ? void 0 : appCheckToken.split(" ")[1];
    const decoded = yield admin.auth().verifyIdToken(token);
    if (!decoded) {
        throw new api_errors_1.UnauthorizedError("ENão autorizado.");
    }
    req.user_id = decoded;
    next();
});
exports.authMiddleware = authMiddleware;
