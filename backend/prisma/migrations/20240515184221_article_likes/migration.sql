-- CreateTable
CREATE TABLE "Likes" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LikesOnArticle" (
    "id" TEXT NOT NULL,
    "articleid" TEXT NOT NULL,
    "userid" TEXT NOT NULL,

    CONSTRAINT "LikesOnArticle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LikesOnArticle" ADD CONSTRAINT "LikesOnArticle_articleid_fkey" FOREIGN KEY ("articleid") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikesOnArticle" ADD CONSTRAINT "LikesOnArticle_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
