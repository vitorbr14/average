"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const dashboard_1 = __importDefault(require("./routes/dashboard"));
const articles_1 = __importDefault(require("./routes/articles"));
const articleSingle_1 = __importDefault(require("./routes/articleSingle"));
const categories_1 = __importDefault(require("./routes/categories"));
const comments_1 = __importDefault(require("./routes/comments"));
const getCommentsArticle_1 = __importDefault(require("./routes/getCommentsArticle"));
const articlesSuggestions_1 = __importDefault(require("./routes/articlesSuggestions"));
const feed_1 = __importDefault(require("./routes/feed"));
var cors = require("cors");
const authMiddleware_1 = require("./middlewares/authMiddleware");
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use("/api/v1/auth", auth_1.default);
app.use("/api/v1/user", authMiddleware_1.authMiddleware, dashboard_1.default);
app.use("/api/v1/articles", authMiddleware_1.authMiddleware, articles_1.default);
app.use("/api/v1/article", articleSingle_1.default);
app.use("/api/v1/category", categories_1.default);
app.use("/api/v1/comments", authMiddleware_1.authMiddleware, comments_1.default);
app.use("/api/v1/getcomments", getCommentsArticle_1.default); //ver os comentários n precisa estar em uma rota protegida!
app.use("/api/v1/articlessuggestion", articlesSuggestions_1.default);
app.use("/api/v1/feed", authMiddleware_1.authMiddleware, feed_1.default);
// app.use(errorMiddleware);
app.listen(5656, () => {
    console.log("Server is running on port 5656");
});
