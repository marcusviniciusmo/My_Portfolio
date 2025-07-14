/*
  Warnings:

  - The primary key for the `Certificates` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `certificate_ID` on the `Certificates` table. All the data in the column will be lost.
  - The required column `id` was added to the `Certificates` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Certificates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "workload" TEXT,
    "instructor" TEXT,
    "institution" TEXT,
    "conclusion" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "score" TEXT,
    "sharingLink" TEXT,
    "area" TEXT NOT NULL,
    CONSTRAINT "Certificates_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "Profile" ("user_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Certificates_area_fkey" FOREIGN KEY ("area") REFERENCES "CertificateAreas" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Certificates_type_fkey" FOREIGN KEY ("type") REFERENCES "CertificateTypes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Certificates" ("area", "conclusion", "image", "institution", "instructor", "name", "score", "sharingLink", "type", "user_ID", "workload") SELECT "area", "conclusion", "image", "institution", "instructor", "name", "score", "sharingLink", "type", "user_ID", "workload" FROM "Certificates";
DROP TABLE "Certificates";
ALTER TABLE "new_Certificates" RENAME TO "Certificates";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
