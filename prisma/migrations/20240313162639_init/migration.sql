-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Fire', 'Water', 'Grass', 'Bug', 'Flying', 'Psychic', 'Poison', 'Dark', 'Dragon', 'Fairy', 'Ice', 'Electric', 'Ground', 'Rock', 'Fighting', 'Stellar', 'Normal', 'Ghost', 'Steel');

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_name_key" ON "Pokemon"("name");
