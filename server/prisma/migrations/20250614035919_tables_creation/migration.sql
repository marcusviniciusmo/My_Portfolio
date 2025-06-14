-- CreateTable
CREATE TABLE "Blogs" (
    "blog_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Certificates" (
    "certificate_ID" TEXT NOT NULL PRIMARY KEY,
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
    "area" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CertificateAreas" (
    "area_ID" TEXT NOT NULL PRIMARY KEY,
    "areaDescription" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CertificateTypes" (
    "type_ID" TEXT NOT NULL PRIMARY KEY,
    "typeDescription" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Education" (
    "education_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "periodStart" DATETIME NOT NULL,
    "periodEnd" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "institution" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Experiences" (
    "experience_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "periodStart" DATETIME NOT NULL,
    "periodEnd" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "institution" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Expertises" (
    "expertise_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "icon" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Icons" (
    "icon_ID" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Knowledges" (
    "knowledge_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MenuItems" (
    "menuItem_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "to" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Networks" (
    "network_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "icon" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Profile" (
    "user_ID" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "curriculum" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProfileInfo" (
    "profileInfo_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "link" TEXT,
    "data" TEXT NOT NULL,
    "icon" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Testimonials" (
    "testimonial_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "quote" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Skills" (
    "skill_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "percentage" INTEGER NOT NULL
);
