import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError, NotFoundError } from "../errors/api-errors";
import { readingTime } from "reading-time-estimator";
import { formatDate } from "../utils/FormatDate";
import { shuffle } from "../utils/Shuffle";

const prisma = new PrismaClient();
var DateDiff = require("date-diff");
export interface Article {
  id: string;
  title: string;
  content: string;
  preview: null | string;
  createdAt: Date;
  users: User[];
}

export interface User {
  userId: string;
  articleId: string;
}

export const getfeed = async (req: Request, res: Response) => {
  const allaritcles: Article[] = await prisma.article.findMany({
    include: {
      users: true,
    },
  });

  const getAllUsers = await prisma.user.findMany({});

  const filterArticleAndNames = allaritcles.map((article: Article) => {
    const obj = getAllUsers.find(
      (user: any) => user.id === article.users[0].userId
    );

    if (obj) {
      const stringDate = article.createdAt.toISOString();

      return {
        articleid: article.id,
        userid: obj.id,
        title: article.title,
        username: obj.name,
        preview: article.preview,
        date: formatDate(stringDate),
        timetoread: readingTime(article.content, 245, "pt-br").text,
      };
    }
  });
  console.log(process.env.PRIVATE_KEY);
  const shuffledArray = shuffle(filterArticleAndNames);
  res.json(shuffledArray);
};
