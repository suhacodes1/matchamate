/*
  Warnings:

  - You are about to drop the column `message` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `text` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "user" TEXT NOT NULL,
    "cafeId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Comment_cafeId_fkey" FOREIGN KEY ("cafeId") REFERENCES "Cafe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("cafeId", "createdAt", "id", "rating") SELECT "cafeId", "createdAt", "id", "rating" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
