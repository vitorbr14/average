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
exports.getAllCategories = exports.newCategory = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const newCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    const newCategory = yield prisma.category.create({
        data: {
            name: name,
        },
    });
    res.json(newCategory);
});
exports.newCategory = newCategory;
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getAllCategories = yield prisma.category.findMany({});
    const allCategories = getAllCategories.map((category) => {
        return {
            value: category.id,
            label: category.name,
        };
    });
    res.json(allCategories);
});
exports.getAllCategories = getAllCategories;
