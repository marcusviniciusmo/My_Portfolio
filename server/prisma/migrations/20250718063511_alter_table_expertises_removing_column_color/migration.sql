/*
  Warnings:

  - You are about to drop the column `color` on the `Expertises` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Expertises" (
    "expertise_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    CONSTRAINT "Expertises_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Expertises_icon_fkey" FOREIGN KEY ("icon") REFERENCES "Icons" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Expertises" ("expertise_ID", "icon", "text", "title", "user_ID") SELECT "expertise_ID", "icon", "text", "title", "user_ID" FROM "Expertises";
DROP TABLE "Expertises";
ALTER TABLE "new_Expertises" RENAME TO "Expertises";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
