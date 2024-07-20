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
exports.getLikesArticle = exports.deslikeArticle = exports.likeArticle = exports.getSingleArticle = exports.editArticle = exports.createArticle = void 0;
const client_1 = require("@prisma/client");
const api_errors_1 = require("../errors/api-errors");
const prisma = new client_1.PrismaClient();
const createArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, category, preview } = req.body;
    const { uid } = req.user_id;
    if (!title || !content) {
        throw new api_errors_1.BadRequestError("Um ou mais campo está faltando.");
    }
    const newArticle = yield prisma.article.create({
        data: {
            title,
            preview,
            category: {
                connect: {
                    id: category,
                },
            },
            content,
            users: {
                create: {
                    user: {
                        connect: {
                            id: uid,
                        },
                    },
                },
            },
        },
        include: {
            users: true,
            category: true,
        },
    });
    res.json(newArticle);
});
exports.createArticle = createArticle;
const editArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { uid } = req.user_id;
    //Find article
    const userArticle = yield prisma.userArticle.findUnique({
        where: {
            userId_articleId: {
                userId: uid,
                articleId: id,
            },
        },
        include: {
            article: true,
        },
    });
    if (!userArticle) {
        throw new api_errors_1.NotFoundError("Artigo não encontado.");
    }
    const updateArticle = yield prisma.article.update({
        where: {
            id: userArticle.articleId,
        },
        data: {
            title: "NUEVO TITLE",
        },
    });
    res.json(updateArticle);
});
exports.editArticle = editArticle;
const getSingleArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findArticle = yield prisma.article.findUnique({
        where: {
            id: id,
        },
        include: {
            users: true,
            category: true,
            likes: true,
        },
    });
    if (!findArticle) {
        throw new api_errors_1.NotFoundError("Artigo não encontrado!");
    }
    res.json(findArticle);
});
exports.getSingleArticle = getSingleArticle;
const likeArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { articleid } = req.params;
    const { userid } = req.body;
    const newLike = yield prisma.likesOnArticle.create({
        data: {
            articleid,
            userid,
        },
    });
    res.json(newLike);
});
exports.likeArticle = likeArticle;
const deslikeArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comentarioid } = req.params;
    const dislike = yield prisma.likesOnArticle.delete({
        where: {
            id: comentarioid,
        },
    });
    res.json(dislike);
});
exports.deslikeArticle = deslikeArticle;
const getLikesArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { articleid } = req.params;
    const getAllLikesFromArticle = yield prisma.likesOnArticle.findMany({
        where: {
            articleid,
        },
    });
    res.json(getAllLikesFromArticle.length);
});
exports.getLikesArticle = getLikesArticle;
