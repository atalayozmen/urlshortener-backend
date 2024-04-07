/*
  Warnings:

  - Added the required column `shortenedUrl` to the `Url` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Url" ADD COLUMN     "shortenedUrl" TEXT NOT NULL;
