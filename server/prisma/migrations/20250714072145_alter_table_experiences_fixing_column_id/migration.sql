/*
  Warnings:

  - The primary key for the `Experiences` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `experience_ID` on the `Experiences` table. All the data in the column will be lost.
  - The required column `id` was added to the `Experiences` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Experiences" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "periodStart" DATETIME NOT NULL,
    "periodEnd" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    CONSTRAINT "Experiences_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Experiences" ("institution", "periodEnd", "periodStart", "title", "user_ID") SELECT "institution", "periodEnd", "periodStart", "title", "user_ID" FROM "Experiences";
DROP TABLE "Experiences";
ALTER TABLE "new_Experiences" RENAME TO "Experiences";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
