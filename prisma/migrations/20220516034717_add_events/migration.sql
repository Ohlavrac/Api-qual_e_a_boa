/*
  Warnings:

  - Added the required column `state` to the `CommercialClient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `commercialclient` ADD COLUMN `state` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `capacity` INTEGER NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `id_owner` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_id_owner_fkey` FOREIGN KEY (`id_owner`) REFERENCES `CommercialClient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
