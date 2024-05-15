import express, { Request, Response } from "express";

export const getUserInfo = async (req: Request, res: Response) => {
  res.json(req.user_id);
};
