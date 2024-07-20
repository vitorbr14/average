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
exports.getfeed = void 0;
const client_1 = require("@prisma/client");
const reading_time_estimator_1 = require("reading-time-estimator");
const FormatDate_1 = require("../utils/FormatDate");
const Shuffle_1 = require("../utils/Shuffle");
const prisma = new client_1.PrismaClient();
var DateDiff = require("date-diff");
const getfeed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allaritcles = yield prisma.article.findMany({
        include: {
            users: true,
        },
    });
    const getAllUsers = yield prisma.user.findMany({});
    const filterArticleAndNames = allaritcles.map((article) => {
        const obj = getAllUsers.find((user) => user.id === article.users[0].userId);
        if (obj) {
            const stringDate = article.createdAt.toISOString();
            return {
                articleid: article.id,
                userid: obj.id,
                title: article.title,
                username: obj.name,
                preview: article.preview,
                date: (0, FormatDate_1.formatDate)(stringDate),
                timetoread: (0, reading_time_estimator_1.readingTime)(article.content, 245, "pt-br").text,
            };
        }
    });
    const shuffledArray = (0, Shuffle_1.shuffle)(filterArticleAndNames);
    res.json(shuffledArray);
});
exports.getfeed = getfeed;
