-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "NilaiUAS" (
	"id" serial PRIMARY KEY NOT NULL,
	"benar" integer NOT NULL,
	"nama_lain_id" integer
);
--> statement-breakpoint
CREATE TABLE "Murid" (
	"id" serial PRIMARY KEY NOT NULL,
	"nama" varchar(255) NOT NULL,
	"kelas" varchar(255) NOT NULL,
	"nomor_absen" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "NamaLain" (
	"id" serial PRIMARY KEY NOT NULL,
	"nama_lain" varchar(255) NOT NULL,
	"kelas" varchar(255) NOT NULL,
	"murid_id" integer
);
--> statement-breakpoint
ALTER TABLE "NilaiUAS" ADD CONSTRAINT "nilai_nama_lain_id_nama_lain_id_fk" FOREIGN KEY ("nama_lain_id") REFERENCES "public"."NamaLain"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "NamaLain" ADD CONSTRAINT "NamaLain_murid_id_fkey" FOREIGN KEY ("murid_id") REFERENCES "public"."Murid"("id") ON DELETE set null ON UPDATE cascade;
*/