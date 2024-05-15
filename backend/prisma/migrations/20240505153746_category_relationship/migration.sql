-- CreateTable
CREATE TABLE "CategoriesOnArticle" (
    "id" TEXT NOT NULL,
    "articleid" TEXT NOT NULL,

    CONSTRAINT "CategoriesOnArticle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoriesOnArticle" ADD CONSTRAINT "CategoriesOnArticle_articleid_fkey" FOREIGN KEY ("articleid") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
