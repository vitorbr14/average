"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const error_1 = require("./middlewares/error");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1/auth", auth_1.default);
app.use("/api/lote", auth_1.default);
app.use(error_1.errorMiddleware);
app.listen(5656, () => {
    console.log("Server is running on port 5656");
});
