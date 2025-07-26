/*
  Warnings:

  - The primary key for the `MenuItems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `menuItem_ID` on the `MenuItems` table. All the data in the column will be lost.
  - The required column `id` was added to the `MenuItems` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MenuItems" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    CONSTRAINT "MenuItems_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MenuItems_icon_fkey" FOREIGN KEY ("icon") REFERENCES "Icons" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_MenuItems" ("icon", "label", "to", "user_ID") SELECT "icon", "label", "to", "user_ID" FROM "MenuItems";
DROP TABLE "MenuItems";
ALTER TABLE "new_MenuItems" RENAME TO "MenuItems";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
