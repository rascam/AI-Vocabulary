/*
  Warnings:

  - You are about to drop the `Card` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Card";

-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "srcWord" TEXT NOT NULL,
    "targetWord" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "credits" TEXT NOT NULL,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);
