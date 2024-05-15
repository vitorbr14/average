import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError, NotFoundError } from "../errors/api-errors";
const prisma = new PrismaClient();

export const getAllArticlesFromUser = async (req: Request, res: Response) => {
  const { userid } = req.params;

  const findArticleFromUser = await prisma.article.findMany({
    where: {
      users: {
        some: {
          userId: userid,
        },
      },
    },
  });
  res.json(findArticleFromUser);
};

export const getAllArticlesShuffled = async (req: Request, res: Response) => {
  const { userid } = req.params;

  const findArticleShuffled = await prisma.article.findMany({
    where: {
      users: {
        some: {
          userId: userid,
        },
      },
    },
  });

  const shuffle = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledArray = shuffle(findArticleShuffled);
  res.json(shuffledArray);
};

export const deleteall = async (req: Request, res: Response) => {
  const deleteall = await prisma.article.deleteMany({});
  res.json(deleteall);
};

export const getAllArticlesFromCategory = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const getCategory = await prisma.category.findUnique({
    where: {
      id: Number(id),
    },
  });

  const getAllArticlesFromCategory = await prisma.article.findMany({
    where: {
      category: {
        some: {
          id: Number(id),
        },
      },
    },
  });

  res.json({
    name: getCategory?.name,
    AllArticles: getAllArticlesFromCategory,
  });
};
