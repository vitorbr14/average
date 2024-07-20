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
exports.testeRota = exports.getUserInfo = exports.login = exports.register = void 0;
const client_1 = require("@prisma/client");
const api_errors_1 = require("../errors/api-errors");
const bcrypt = require("bcrypt");
const admin = require("../firebase/firebaseConfig");
const prisma = new client_1.PrismaClient();
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, email, emailVerified, password, name } = req.body;
    const passwordHashed = yield bcrypt.hash(password, 10);
    const newUser = yield prisma.user.create({
        data: {
            name,
            id,
            email,
            emailVerified,
            password: passwordHashed,
        },
    });
    if (!newUser) {
        throw new api_errors_1.BadRequestError("Erro ao cadastrar usuário, tente novamente.");
    }
    res.json(newUser);
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email) {
        throw new api_errors_1.BadRequestError("Must provide Email ");
    }
    if (!password) {
        throw new api_errors_1.BadRequestError("Must provide Password");
    }
    const user = yield prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        throw new api_errors_1.BadRequestError("Invalid Email");
    }
    const comparePassword = (passwordToCompare) => __awaiter(void 0, void 0, void 0, function* () {
        const match = yield bcrypt.compare(passwordToCompare, user.password);
        return match;
    });
    const isValid = yield comparePassword(password);
    if (!isValid) {
        throw new api_errors_1.BadRequestError("Senha Incorreta");
    }
    res.json(user);
});
exports.login = login;
const getUserInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findUser = yield prisma.user.findUnique({
        where: {
            id,
        },
    });
    if (!findUser) {
        throw new api_errors_1.NotFoundError("Usuário não encontrado");
    }
    res.json(findUser);
});
exports.getUserInfo = getUserInfo;
const testeRota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json("Tá funfando");
});
exports.testeRota = testeRota;
