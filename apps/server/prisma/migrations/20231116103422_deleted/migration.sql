/*
  Warnings:

  - You are about to drop the `Language` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Words` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userVocCount" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "learningDirection" SET DEFAULT 'srcToTarget',
ALTER COLUMN "score" SET DEFAULT 0,
ALTER COLUMN "slowSpeech" SET DEFAULT false,
ALTER COLUMN "userLevel" SET DEFAULT 'beginner';

-- DropTable
DROP TABLE "Language";

-- DropTable
DROP TABLE "Words";

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "srcWord" TEXT NOT NULL,
    "targetWord" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "credits" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
