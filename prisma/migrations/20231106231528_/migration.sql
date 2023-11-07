-- CreateTable
CREATE TABLE "ExpenseReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "supplier" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "proof" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT not_billed
);
