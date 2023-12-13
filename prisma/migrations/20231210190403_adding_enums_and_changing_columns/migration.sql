/*
  Warnings:

  - You are about to drop the column `independencyLevel` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `dependencyLevel` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `age` on the `Pet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `size` on the `Pet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Age" AS ENUM ('FILHOTE', 'JOVEM', 'ADULTO', 'VELHO');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('PEQUENO', 'MEDIO', 'GRANDE');

-- CreateEnum
CREATE TYPE "DependencyLevel" AS ENUM ('DEPENDENTE', 'MEDIO', 'INDEPENDENTE');

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "independencyLevel",
ADD COLUMN     "dependencyLevel" "DependencyLevel" NOT NULL,
DROP COLUMN "age",
ADD COLUMN     "age" "Age" NOT NULL,
DROP COLUMN "size",
ADD COLUMN     "size" "Size" NOT NULL;
