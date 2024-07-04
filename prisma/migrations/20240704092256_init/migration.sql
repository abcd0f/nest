/*
  Warnings:

  - You are about to drop the `list` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `list`;

-- CreateTable
CREATE TABLE `user_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
