import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError, NotFoundError } from "../errors/api-errors";
const prisma = new PrismaClient();

export const newCategory = async (req: Request, res: Response) => {
  const { name } = req.body;

  const newCategory = await prisma.category.create({
    data: {
      name: name,
    },
  });
  res.json(newCategory);
};

export const getAllCategories = async (req: Request, res: Response) => {
  const getAllCategories = await prisma.category.findMany({});

  const allCategories = getAllCategories.map((category) => {
    return {
      value: category.id,
      label: category.name,
    };
  });

  res.json(allCategories);
};
