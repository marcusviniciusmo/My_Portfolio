/*
  Warnings:

  - The primary key for the `Knowledges` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `knowledge_ID` on the `Knowledges` table. All the data in the column will be lost.
  - The required column `id` was added to the `Knowledges` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Knowledges" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "Knowledges_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Knowledges" ("description", "user_ID") SELECT "description", "user_ID" FROM "Knowledges";
DROP TABLE "Knowledges";
ALTER TABLE "new_Knowledges" RENAME TO "Knowledges";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
