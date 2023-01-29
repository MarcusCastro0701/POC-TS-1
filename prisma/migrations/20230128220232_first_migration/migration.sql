-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "genre" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parentalratings" (
    "id" SERIAL NOT NULL,
    "parental_rating" TEXT NOT NULL,

    CONSTRAINT "parentalratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "comentary" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "genre_id" INTEGER NOT NULL,
    "parental_rating_id" INTEGER NOT NULL,
    "has_review" BOOLEAN NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genres_genre_key" ON "genres"("genre");

-- CreateIndex
CREATE UNIQUE INDEX "parentalratings_parental_rating_key" ON "parentalratings"("parental_rating");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_movie_id_key" ON "reviews"("movie_id");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_parental_rating_id_fkey" FOREIGN KEY ("parental_rating_id") REFERENCES "parentalratings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
