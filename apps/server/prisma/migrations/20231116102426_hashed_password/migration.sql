/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `hashedPassword` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `learningDirection` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slowSpeech` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userLevel` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userSrcLang` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userTargetLang` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Level" AS ENUM ('beginner', 'sophisticated');

-- CreateEnum
CREATE TYPE "Direction" AS ENUM ('srcToTarget', 'targetToSrc');

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "hashedPassword" TEXT NOT NULL,
ADD COLUMN     "learningDirection" "Direction" NOT NULL,
ADD COLUMN     "score" INTEGER NOT NULL,
ADD COLUMN     "slowSpeech" BOOLEAN NOT NULL,
ADD COLUMN     "userLevel" "Level" NOT NULL,
ADD COLUMN     "userSrcLang" TEXT NOT NULL,
ADD COLUMN     "userTargetLang" TEXT NOT NULL,
ADD COLUMN     "words" INTEGER[],
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "Words" (
    "id" SERIAL NOT NULL,
    "srcWord" TEXT NOT NULL,
    "targetWord" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "Words_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "langCode" TEXT NOT NULL,
    "langCodeSpecific" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Language_langCode_key" ON "Language"("langCode");
