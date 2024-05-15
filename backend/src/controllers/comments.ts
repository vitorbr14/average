import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError, NotFoundError } from "../errors/api-errors";
const prisma = new PrismaClient();
export const newComment = async (req: Request, res: Response) => {
  const { comment, articleId, userId } = req.body;
  const newComment = await prisma.comments.create({
    data: {
      commentary: comment,
      articleId,
      userId,
    },
  });

  if (!newComment) {
    throw new BadRequestError("Algo deu errado, tente novamente!");
  }
  res.json(newComment);
};

export const allComentsFromArticle = async (req: Request, res: Response) => {
  const { id } = req.params;

  const findComments = await prisma.comments.findMany({
    where: {
      articleId: id,
    },
  });

  if (!findComments) {
    throw new NotFoundError("Comentários não encotrados!");
  }

  const commentsids = findComments.map((commentid: any) => commentid.userId);

  const findUserById = await prisma.user.findMany({
    where: {
      id: { in: commentsids },
    },
  });

  const filteredComments = findComments.map((comment) => {
    const filteredUsers = findUserById.find(
      (user) => user.id === comment.userId
    );
    if (filteredUsers) {
      return {
        name: filteredUsers?.name,
        userId: filteredUsers.id,
        commentId: comment.id,
        commentary: comment.commentary,
        createdAt: comment.createdAt,
      };
    }
  });

  // res.json({ findUserById, findComments });
  res.json(filteredComments);
};

export const getUserNameForCommentary = async (req: Request, res: Response) => {
  const { userid } = req.params;

  const findUser = await prisma.user.findUnique({
    where: {
      id: userid,
    },
  });

  if (!findUser) {
    throw new NotFoundError("Usuário não encontrado");
  }

  res.json({ name: findUser.name, id: findUser.id });
};
