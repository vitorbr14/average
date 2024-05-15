import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError, NotFoundError } from "../errors/api-errors";
const prisma = new PrismaClient();

type ArticleType = {
  title: string;
  content: string;
  createdBy: string;
  category: number;
  preview: string;
};
export const createArticle = async (req: Request, res: Response) => {
  const { title, content, category, preview } = req.body as ArticleType;
  const { uid } = req.user_id as any;
  if (!title || !content) {
    throw new BadRequestError("Um ou mais campo está faltando.");
  }

  const newArticle = await prisma.article.create({
    data: {
      title,
      preview,
      category: {
        connect: {
          id: category,
        },
      },
      content,
      users: {
        create: {
          user: {
            connect: {
              id: uid,
            },
          },
        },
      },
    },
    include: {
      users: true,
      category: true,
    },
  });

  res.json(newArticle);
};
export const editArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { uid } = req.user_id as any;

  //Find article
  const userArticle = await prisma.userArticle.findUnique({
    where: {
      userId_articleId: {
        userId: uid,
        articleId: id,
      },
    },
    include: {
      article: true,
    },
  });

  if (!userArticle) {
    throw new NotFoundError("Artigo não encontado.");
  }

  const updateArticle = await prisma.article.update({
    where: {
      id: userArticle.articleId,
    },
    data: {
      title: "NUEVO TITLE",
    },
  });
  res.json(updateArticle);
};

export const getSingleArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const findArticle = await prisma.article.findUnique({
    where: {
      id: id,
    },
    include: {
      users: true,
      category: true,
    },
  });

  if (!findArticle) {
    throw new NotFoundError("Artigo não encontrado!");
  }
  res.json(findArticle);
};
