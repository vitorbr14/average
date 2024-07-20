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
exports.getUserNameForCommentary = exports.allComentsFromArticle = exports.newComment = void 0;
const client_1 = require("@prisma/client");
const api_errors_1 = require("../errors/api-errors");
const prisma = new client_1.PrismaClient();
const newComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comment, articleId, userId } = req.body;
    const newComment = yield prisma.comments.create({
        data: {
            commentary: comment,
            articleId,
            userId,
        },
    });
    if (!newComment) {
        throw new api_errors_1.BadRequestError("Algo deu errado, tente novamente!");
    }
    res.json(newComment);
});
exports.newComment = newComment;
const allComentsFromArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findComments = yield prisma.comments.findMany({
        where: {
            articleId: id,
        },
    });
    if (!findComments) {
        throw new api_errors_1.NotFoundError("Comentários não encotrados!");
    }
    const commentsids = findComments.map((commentid) => commentid.userId);
    const findUserById = yield prisma.user.findMany({
        where: {
            id: { in: commentsids },
        },
    });
    const filteredComments = findComments.map((comment) => {
        const filteredUsers = findUserById.find((user) => user.id === comment.userId);
        if (filteredUsers) {
            return {
                name: filteredUsers === null || filteredUsers === void 0 ? void 0 : filteredUsers.name,
                userId: filteredUsers.id,
                commentId: comment.id,
                commentary: comment.commentary,
                createdAt: comment.createdAt,
            };
        }
    });
    // res.json({ findUserById, findComments });
    res.json(filteredComments);
});
exports.allComentsFromArticle = allComentsFromArticle;
const getUserNameForCommentary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userid } = req.params;
    const findUser = yield prisma.user.findUnique({
        where: {
            id: userid,
        },
    });
    if (!findUser) {
        throw new api_errors_1.NotFoundError("Usuário não encontrado");
    }
    res.json({ name: findUser.name, id: findUser.id });
});
exports.getUserNameForCommentary = getUserNameForCommentary;
