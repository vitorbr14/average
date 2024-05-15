/*
  Warnings:

  - You are about to drop the column `comment` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the `CommentsOnArticle` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `articleId` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commentary` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CommentsOnArticle" DROP CONSTRAINT "CommentsOnArticle_articleId_fkey";

-- DropForeignKey
ALTER TABLE "CommentsOnArticle" DROP CONSTRAINT "CommentsOnArticle_commentId_fkey";

-- AlterTable
ALTER TABLE "Comments" DROP COLUMN "comment",
ADD COLUMN     "articleId" TEXT NOT NULL,
ADD COLUMN     "commentary" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "CommentsOnArticle";

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
