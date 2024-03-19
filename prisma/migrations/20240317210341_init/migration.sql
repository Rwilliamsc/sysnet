/*
  Warnings:

  - Added the required column `description` to the `activities` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_activities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "activityDate" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "activityHours" INTEGER NOT NULL,
    "urlEvidence" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "graduationId" INTEGER NOT NULL,
    "quarterId" INTEGER NOT NULL,
    "activityTypeId" INTEGER NOT NULL,
    "evidenceTypeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "activities_graduationId_fkey" FOREIGN KEY ("graduationId") REFERENCES "graduations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "activities_quarterId_fkey" FOREIGN KEY ("quarterId") REFERENCES "quarters" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "activities_activityTypeId_fkey" FOREIGN KEY ("activityTypeId") REFERENCES "activity_types" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "activities_evidenceTypeId_fkey" FOREIGN KEY ("evidenceTypeId") REFERENCES "evidence_types" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "activities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_activities" ("activityDate", "activityHours", "activityTypeId", "approved", "createdAt", "evidenceTypeId", "graduationId", "id", "quarterId", "status", "updatedAt", "urlEvidence", "userId") SELECT "activityDate", "activityHours", "activityTypeId", "approved", "createdAt", "evidenceTypeId", "graduationId", "id", "quarterId", "status", "updatedAt", "urlEvidence", "userId" FROM "activities";
DROP TABLE "activities";
ALTER TABLE "new_activities" RENAME TO "activities";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
