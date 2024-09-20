/*
  Warnings:

  - Made the column `description` on table `list` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `list_title_key` ON `list`;

-- AlterTable
ALTER TABLE `list` MODIFY `description` VARCHAR(191) NOT NULL;
