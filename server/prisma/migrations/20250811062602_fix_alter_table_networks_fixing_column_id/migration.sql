/*
  Warnings:

  - The primary key for the `Networks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `network_ID` on the `Networks` table. All the data in the column will be lost.
  - The required column `id` was added to the `Networks` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Networks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    CONSTRAINT "Networks_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Networks_icon_fkey" FOREIGN KEY ("icon") REFERENCES "Icons" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Networks" ("icon", "link", "title", "user_ID") SELECT "icon", "link", "title", "user_ID" FROM "Networks";
DROP TABLE "Networks";
ALTER TABLE "new_Networks" RENAME TO "Networks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
