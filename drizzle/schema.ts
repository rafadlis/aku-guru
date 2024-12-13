import {
  pgTable,
  bigint,
  timestamp,
  text,
  foreignKey,
  integer,
  smallint,
  serial,
  varchar,
} from 'drizzle-orm/pg-core';

export const mataPelajaran = pgTable('MataPelajaran', {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint({ mode: 'number' })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: 'MataPelajaran_id_seq',
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9223372036854775807,
    }),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  mataPelajaran: text('mata_pelajaran'),
  tingkatKelas: text('tingkat_kelas'),
});

export const nilaiTugas = pgTable(
  'NilaiTugas',
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint({ mode: 'number' })
      .primaryKey()
      .generatedByDefaultAsIdentity({
        name: 'NilaiTugas_id_seq',
        startWith: 1,
        increment: 1,
        minValue: 1,
        maxValue: 9223372036854775807,
      }),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
      .defaultNow()
      .notNull(),
    muridId: integer('murid_id'),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    tugasId: bigint('tugas_id', { mode: 'number' }),
    nilai: smallint(),
  },
  (table) => [
    foreignKey({
      columns: [table.muridId],
      foreignColumns: [murid.id],
      name: 'NilaiTugas_murid_id_fkey',
    })
      .onUpdate('cascade')
      .onDelete('cascade'),
    foreignKey({
      columns: [table.tugasId],
      foreignColumns: [tugas.id],
      name: 'NilaiTugas_tugas_id_fkey',
    })
      .onUpdate('cascade')
      .onDelete('cascade'),
  ]
);

export const tugas = pgTable(
  'Tugas',
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint({ mode: 'number' })
      .primaryKey()
      .generatedByDefaultAsIdentity({
        name: 'Tugas_id_seq',
        startWith: 1,
        increment: 1,
        minValue: 1,
        maxValue: 9223372036854775807,
      }),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
      .defaultNow()
      .notNull(),
    tanggalTugas: timestamp('tanggal_tugas', {
      withTimezone: true,
      mode: 'string',
    }),
    jatuhTempo: timestamp('jatuh_tempo', {
      withTimezone: true,
      mode: 'string',
    }),
    namaTugas: text('nama_tugas'),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    mapelId: bigint('mapel_id', { mode: 'number' }),
  },
  (table) => [
    foreignKey({
      columns: [table.mapelId],
      foreignColumns: [mataPelajaran.id],
      name: 'Tugas_mapel_id_fkey',
    })
      .onUpdate('cascade')
      .onDelete('cascade'),
  ]
);

export const guru = pgTable('Guru', {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint({ mode: 'number' })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: 'Guru_id_seq',
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9223372036854775807,
    }),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  namaGuru: text('nama_guru'),
});

export const murid = pgTable(
  'Murid',
  {
    id: serial().primaryKey().notNull(),
    nama: varchar({ length: 255 }).notNull(),
    kelas: varchar({ length: 255 }).notNull(),
    nomorAbsen: varchar('nomor_absen', { length: 255 }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    kelasId: bigint('kelas_id', { mode: 'number' }),
  },
  (table) => [
    foreignKey({
      columns: [table.kelasId],
      foreignColumns: [kelas.id],
      name: 'Murid_kelas_id_fkey',
    })
      .onUpdate('cascade')
      .onDelete('set null'),
  ]
);

export const nilaiUas = pgTable(
  'NilaiUAS',
  {
    id: serial().primaryKey().notNull(),
    benar: integer().notNull(),
    namaLainId: integer('nama_lain_id'),
  },
  (table) => [
    foreignKey({
      columns: [table.namaLainId],
      foreignColumns: [namaLain.id],
      name: 'nilai_nama_lain_id_nama_lain_id_fk',
    })
      .onUpdate('cascade')
      .onDelete('cascade'),
  ]
);

export const namaLain = pgTable(
  'NamaLain',
  {
    id: serial().primaryKey().notNull(),
    namaLain: varchar('nama_lain', { length: 255 }).notNull(),
    kelas: varchar({ length: 255 }).notNull(),
    muridId: integer('murid_id'),
  },
  (table) => [
    foreignKey({
      columns: [table.muridId],
      foreignColumns: [murid.id],
      name: 'NamaLain_murid_id_fkey',
    })
      .onUpdate('cascade')
      .onDelete('set null'),
  ]
);

export const kelas = pgTable('Kelas', {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint({ mode: 'number' })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: 'Kelas_id_seq',
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9223372036854775807,
    }),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  namaKelas: text('nama_kelas'),
  tingkat: text(),
});

export const jadwal = pgTable(
  'Jadwal',
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint({ mode: 'number' })
      .primaryKey()
      .generatedByDefaultAsIdentity({
        name: 'JadwalGuru_id_seq',
        startWith: 1,
        increment: 1,
        minValue: 1,
        maxValue: 9223372036854775807,
      }),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
      .defaultNow()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    kelasId: bigint('kelas_id', { mode: 'number' }),
    waktuMulai: timestamp('waktu_mulai', {
      withTimezone: true,
      mode: 'string',
    }),
    waktuSelesai: timestamp('waktu_selesai', {
      withTimezone: true,
      mode: 'string',
    }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    mapelId: bigint('mapel_id', { mode: 'number' }),
  },
  (table) => [
    foreignKey({
      columns: [table.kelasId],
      foreignColumns: [kelas.id],
      name: 'JadwalGuru_kelas_id_fkey',
    })
      .onUpdate('cascade')
      .onDelete('set null'),
    foreignKey({
      columns: [table.mapelId],
      foreignColumns: [mataPelajaran.id],
      name: 'Jadwal_mapel_id_fkey',
    })
      .onUpdate('cascade')
      .onDelete('set null'),
  ]
);
