import {
  pgTable,
  foreignKey,
  serial,
  integer,
  varchar,
} from "drizzle-orm/pg-core";

export const nilaiUas = pgTable(
  "NilaiUAS",
  {
    id: serial().primaryKey().notNull(),
    benar: integer().notNull(),
    namaLainId: integer("nama_lain_id"),
  },
  (table) => [
    foreignKey({
      columns: [table.namaLainId],
      foreignColumns: [namaLain.id],
      name: "nilai_nama_lain_id_nama_lain_id_fk",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ]
);

export const murid = pgTable("Murid", {
  id: serial().primaryKey().notNull(),
  nama: varchar({ length: 255 }).notNull(),
  kelas: varchar({ length: 255 }).notNull(),
  nomorAbsen: varchar("nomor_absen", { length: 255 }).notNull(),
});

export const namaLain = pgTable(
  "NamaLain",
  {
    id: serial().primaryKey().notNull(),
    namaLain: varchar("nama_lain", { length: 255 }).notNull(),
    kelas: varchar({ length: 255 }).notNull(),
    muridId: integer("murid_id"),
  },
  (table) => [
    foreignKey({
      columns: [table.muridId],
      foreignColumns: [murid.id],
      name: "NamaLain_murid_id_fkey",
    })
      .onUpdate("cascade")
      .onDelete("set null"),
  ]
);
