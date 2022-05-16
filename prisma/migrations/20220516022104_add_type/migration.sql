-- AlterTable
ALTER TABLE `commercialclient` ADD COLUMN `type` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `comunclient` ADD COLUMN `type` INTEGER NOT NULL DEFAULT 0;
