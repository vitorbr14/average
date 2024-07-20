import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { BadRequestError, NotFoundError } from "../errors/api-errors";
import { Hash } from "crypto";
const bcrypt = require("bcrypt");
const admin = require("../firebase/firebaseConfig");
const prisma = new PrismaClient();

export const register = async (req: Request, res: Response) => {
  const { id, email, emailVerified, password, name } = req.body;

  const passwordHashed = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name,
      id,
      email,
      emailVerified,
      password: passwordHashed,
    },
  });

  if (!newUser) {
    throw new BadRequestError("Erro ao cadastrar usuário, tente novamente.");
  }

  res.json(newUser);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email) {
    throw new BadRequestError("Must provide Email ");
  }
  if (!password) {
    throw new BadRequestError("Must provide Password");
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw new BadRequestError("Invalid Email");
  }

  const comparePassword = async (passwordToCompare: string) => {
    const match = await bcrypt.compare(passwordToCompare, user.password);
    return match;
  };

  const isValid = await comparePassword(password);

  if (!isValid) {
    throw new BadRequestError("Senha Incorreta");
  }

  res.json(user);
};

export const getUserInfo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const findUser = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!findUser) {
    throw new NotFoundError("Usuário não encontrado");
  }
  res.json(findUser);
};

export const testeRota = async (req: Request, res: Response) => {
  res.json("Tá funfando");
};
