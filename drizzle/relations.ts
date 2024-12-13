import { relations } from "drizzle-orm/relations";
import { murid, nilaiTugas, tugas, mataPelajaran, kelas, namaLain, nilaiUas, jadwal } from "./schema";

export const nilaiTugasRelations = relations(nilaiTugas, ({one}) => ({
	murid: one(murid, {
		fields: [nilaiTugas.muridId],
		references: [murid.id]
	}),
	tugas: one(tugas, {
		fields: [nilaiTugas.tugasId],
		references: [tugas.id]
	}),
}));

export const muridRelations = relations(murid, ({one, many}) => ({
	nilaiTugases: many(nilaiTugas),
	kela: one(kelas, {
		fields: [murid.kelasId],
		references: [kelas.id]
	}),
	namaLains: many(namaLain),
}));

export const tugasRelations = relations(tugas, ({one, many}) => ({
	nilaiTugases: many(nilaiTugas),
	mataPelajaran: one(mataPelajaran, {
		fields: [tugas.mapelId],
		references: [mataPelajaran.id]
	}),
}));

export const mataPelajaranRelations = relations(mataPelajaran, ({many}) => ({
	tugases: many(tugas),
	jadwals: many(jadwal),
}));

export const kelasRelations = relations(kelas, ({many}) => ({
	murids: many(murid),
	jadwals: many(jadwal),
}));

export const nilaiUasRelations = relations(nilaiUas, ({one}) => ({
	namaLain: one(namaLain, {
		fields: [nilaiUas.namaLainId],
		references: [namaLain.id]
	}),
}));

export const namaLainRelations = relations(namaLain, ({one, many}) => ({
	nilaiUas: many(nilaiUas),
	murid: one(murid, {
		fields: [namaLain.muridId],
		references: [murid.id]
	}),
}));

export const jadwalRelations = relations(jadwal, ({one}) => ({
	kela: one(kelas, {
		fields: [jadwal.kelasId],
		references: [kelas.id]
	}),
	mataPelajaran: one(mataPelajaran, {
		fields: [jadwal.mapelId],
		references: [mataPelajaran.id]
	}),
}));