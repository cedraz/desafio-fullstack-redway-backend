/*
  Warnings:

  - The primary key for the `emails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `emails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "emails" DROP CONSTRAINT "emails_pkey",
DROP COLUMN "id";
