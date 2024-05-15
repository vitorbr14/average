/*
  Warnings:

  - You are about to drop the `CategoriesOnArticle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnArticle" DROP CONSTRAINT "CategoriesOnArticle_articleid_fkey";

-- DropTable
DROP TABLE "CategoriesOnArticle";
