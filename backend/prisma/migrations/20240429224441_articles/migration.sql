/*
  Warnings:

  - You are about to drop the `UserArticle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserArticle" DROP CONSTRAINT "UserArticle_articleId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticle" DROP CONSTRAINT "UserArticle_userId_fkey";

-- DropTable
DROP TABLE "UserArticle";

-- CreateTable
CREATE TABLE "UserArticles" (
    "id" SERIAL NOT NULL,
    "postId" TEXT,
    "userId" TEXT,

    CONSTRAINT "UserArticles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserArticles" ADD CONSTRAINT "UserArticles_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticles" ADD CONSTRAINT "UserArticles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
