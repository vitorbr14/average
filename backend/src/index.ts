import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import auth from "./routes/auth";
import dashboard from "./routes/dashboard";
import articles from "./routes/articles";
import articleSingle from "./routes/articleSingle";
import categories from "./routes/categories";
import comments from "./routes/comments";
import getCommentsArticle from "./routes/getCommentsArticle";
import articlesSuggestions from "./routes/articlesSuggestions";
import feed from "./routes/feed";
var cors = require("cors");
import { authMiddleware } from "./middlewares/authMiddleware";
import { errorMiddleware } from "./middlewares/error";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", auth);
app.use("/api/v1/user", authMiddleware, dashboard);
app.use("/api/v1/articles", authMiddleware, articles);
app.use("/api/v1/article", articleSingle);
app.use("/api/v1/category", categories);
app.use("/api/v1/comments", authMiddleware, comments);
app.use("/api/v1/getcomments", getCommentsArticle); //ver os comentários n precisa estar em uma rota protegida!
app.use("/api/v1/articlessuggestion", articlesSuggestions);
app.use("/api/v1/feed", authMiddleware, feed);
// app.use(errorMiddleware);

app.listen(5656, () => {
  console.log("Server is running on port 5656");
});
