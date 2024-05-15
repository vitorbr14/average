import express, { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../errors/api-errors";
const admin = require("../firebase/firebaseConfig");
export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const appCheckToken = req.header("x-firebase-appcheck");
  if (!appCheckToken) {
    throw new UnauthorizedError("Não autorizado.");
  }
  const token = appCheckToken?.split(" ")[1];

  const decoded = await admin.auth().verifyIdToken(token);
  if (!decoded) {
    throw new UnauthorizedError("ENão autorizado.");
  }

  req.user_id = decoded;
  next();
};
