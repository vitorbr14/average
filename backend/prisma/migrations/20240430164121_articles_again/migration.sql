/*
  Warnings:

  - You are about to drop the `UserArticles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserArticles" DROP CONSTRAINT "UserArticles_postId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticles" DROP CONSTRAINT "UserArticles_userId_fkey";

-- DropTable
DROP TABLE "UserArticles";

-- CreateTable
CREATE TABLE "UserArticle" (
    "userId" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,

    CONSTRAINT "UserArticle_pkey" PRIMARY KEY ("userId","articleId")
);

-- AddForeignKey
ALTER TABLE "UserArticle" ADD CONSTRAINT "UserArticle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticle" ADD CONSTRAINT "UserArticle_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
