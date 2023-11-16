/*
  Warnings:

  - You are about to drop the column `words` on the `User` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "words";

-- AlterTable
ALTER TABLE "Word" ADD COLUMN     "bin" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "voice" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "voiceSlow" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "imgUrl" SET DEFAULT '',
ALTER COLUMN "credits" SET DEFAULT '';

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
