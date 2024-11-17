/*
  Warnings:

  - You are about to drop the `stale` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `stale` DROP FOREIGN KEY `Stale_produtoId_fkey`;

-- DropTable
DROP TABLE `stale`;

-- CreateTable
CREATE TABLE `Sale` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `produtoId` INTEGER NOT NULL,
    `quantidadeVendida` INTEGER NOT NULL,
    `valorTotal` DOUBLE NOT NULL,
    `dataVenda` DATETIME(3) NOT NULL,
    `estoque` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Sale` ADD CONSTRAINT `Sale_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
