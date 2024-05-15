/*
  Warnings:

  - You are about to drop the column `createdById` on the `Article` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_createdById_fkey";

-- AlterTable
ALTER TABLE "Article" DROP COLUMN "createdById";

-- CreateTable
CREATE TABLE "UserArticle" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,

    CONSTRAINT "UserArticle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserArticle" ADD CONSTRAINT "UserArticle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticle" ADD CONSTRAINT "UserArticle_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
