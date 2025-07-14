/*
  Warnings:

  - The primary key for the `Blogs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `blog_ID` on the `Blogs` table. All the data in the column will be lost.
  - The required column `id` was added to the `Blogs` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Blogs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    CONSTRAINT "Blogs_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Blogs" ("image", "name", "url", "user_ID") SELECT "image", "name", "url", "user_ID" FROM "Blogs";
DROP TABLE "Blogs";
ALTER TABLE "new_Blogs" RENAME TO "Blogs";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
