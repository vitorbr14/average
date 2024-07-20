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
exports.getAllArticlesFromCategory = exports.deleteall = exports.getAllArticlesShuffled = exports.getAllArticlesFromUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllArticlesFromUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userid } = req.params;
    const findArticleFromUser = yield prisma.article.findMany({
        where: {
            users: {
                some: {
                    userId: userid,
                },
            },
        },
    });
    res.json(findArticleFromUser);
});
exports.getAllArticlesFromUser = getAllArticlesFromUser;
const getAllArticlesShuffled = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userid } = req.params;
    const findArticleShuffled = yield prisma.article.findMany({
        where: {
            users: {
                some: {
                    userId: userid,
                },
            },
        },
    });
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    const shuffledArray = shuffle(findArticleShuffled);
    res.json(shuffledArray);
});
exports.getAllArticlesShuffled = getAllArticlesShuffled;
const deleteall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteall = yield prisma.article.deleteMany({});
    res.json(deleteall);
});
exports.deleteall = deleteall;
const getAllArticlesFromCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const getCategory = yield prisma.category.findUnique({
        where: {
            id: Number(id),
        },
    });
    const getAllArticlesFromCategory = yield prisma.article.findMany({
        where: {
            category: {
                some: {
                    id: Number(id),
                },
            },
        },
    });
    res.json({
        name: getCategory === null || getCategory === void 0 ? void 0 : getCategory.name,
        AllArticles: getAllArticlesFromCategory,
    });
});
exports.getAllArticlesFromCategory = getAllArticlesFromCategory;
