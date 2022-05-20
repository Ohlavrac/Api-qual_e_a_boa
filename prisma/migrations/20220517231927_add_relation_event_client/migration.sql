-- CreateTable
CREATE TABLE `comunClientEvent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idComunClient` INTEGER NOT NULL,
    `idEvent` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comunClientEvent` ADD CONSTRAINT `comunClientEvent_idComunClient_fkey` FOREIGN KEY (`idComunClient`) REFERENCES `ComunClient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comunClientEvent` ADD CONSTRAINT `comunClientEvent_idEvent_fkey` FOREIGN KEY (`idEvent`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
