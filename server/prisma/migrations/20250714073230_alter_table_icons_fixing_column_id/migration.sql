/*
  Warnings:

  - The primary key for the `Icons` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `icon_ID` on the `Icons` table. All the data in the column will be lost.
  - The required column `id` was added to the `Icons` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Expertises" (
    "expertise_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    CONSTRAINT "Expertises_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Expertises_icon_fkey" FOREIGN KEY ("icon") REFERENCES "Icons" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Expertises" ("color", "expertise_ID", "icon", "text", "title", "user_ID") SELECT "color", "expertise_ID", "icon", "text", "title", "user_ID" FROM "Expertises";
DROP TABLE "Expertises";
ALTER TABLE "new_Expertises" RENAME TO "Expertises";
CREATE TABLE "new_Icons" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Icons" ("description") SELECT "description" FROM "Icons";
DROP TABLE "Icons";
ALTER TABLE "new_Icons" RENAME TO "Icons";
CREATE TABLE "new_MenuItems" (
    "menuItem_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    CONSTRAINT "MenuItems_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MenuItems_icon_fkey" FOREIGN KEY ("icon") REFERENCES "Icons" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_MenuItems" ("icon", "label", "menuItem_ID", "to", "user_ID") SELECT "icon", "label", "menuItem_ID", "to", "user_ID" FROM "MenuItems";
DROP TABLE "MenuItems";
ALTER TABLE "new_MenuItems" RENAME TO "MenuItems";
CREATE TABLE "new_Networks" (
    "network_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    CONSTRAINT "Networks_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Networks_icon_fkey" FOREIGN KEY ("icon") REFERENCES "Icons" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Networks" ("icon", "link", "network_ID", "title", "user_ID") SELECT "icon", "link", "network_ID", "title", "user_ID" FROM "Networks";
DROP TABLE "Networks";
ALTER TABLE "new_Networks" RENAME TO "Networks";
CREATE TABLE "new_ProfileInfo" (
    "profileInfo_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "link" TEXT,
    "data" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    CONSTRAINT "ProfileInfo_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProfileInfo_icon_fkey" FOREIGN KEY ("icon") REFERENCES "Icons" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ProfileInfo" ("data", "icon", "label", "link", "profileInfo_ID", "user_ID") SELECT "data", "icon", "label", "link", "profileInfo_ID", "user_ID" FROM "ProfileInfo";
DROP TABLE "ProfileInfo";
ALTER TABLE "new_ProfileInfo" RENAME TO "ProfileInfo";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
