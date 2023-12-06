/*
  Warnings:

  - A unique constraint covering the columns `[cep]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cep` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "cep" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Address_cep_key" ON "Address"("cep");
