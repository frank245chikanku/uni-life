-- CreateTable
CREATE TABLE "Internship" (
    "id" TEXT NOT NULL,
    "contact" TEXT,
    "link" TEXT,
    "address" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Internship_pkey" PRIMARY KEY ("id")
);
