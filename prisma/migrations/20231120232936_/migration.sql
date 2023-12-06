/*
  Warnings:

  - You are about to drop the column `cep` on the `Address` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[zipCode]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `zipCode` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Address_cep_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "cep",
ADD COLUMN     "zipCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Address_zipCode_key" ON "Address"("zipCode");
