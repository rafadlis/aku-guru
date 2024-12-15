import { relations } from "drizzle-orm/relations";
import { Murid, NilaiTugas, Tugas, MataPelajaran, Guru, PenempatanGuru, Sekolah, Kelas, NamaLain, NilaiUAS, Jadwal, Provinsi, Kabupaten, Kecamatan, DesaKelurahan } from "./schema";

export const NilaiTugasRelations = relations(NilaiTugas, ({one}) => ({
	Murid: one(Murid, {
		fields: [NilaiTugas.murid_id],
		references: [Murid.id]
	}),
	Tugas: one(Tugas, {
		fields: [NilaiTugas.tugas_id],
		references: [Tugas.id]
	}),
}));

export const MuridRelations = relations(Murid, ({one, many}) => ({
	NilaiTugases: many(NilaiTugas),
	Kela: one(Kelas, {
		fields: [Murid.kelas_id],
		references: [Kelas.id]
	}),
	NamaLains: many(NamaLain),
}));

export const TugasRelations = relations(Tugas, ({one, many}) => ({
	NilaiTugases: many(NilaiTugas),
	MataPelajaran: one(MataPelajaran, {
		fields: [Tugas.mapel_id],
		references: [MataPelajaran.id]
	}),
}));

export const MataPelajaranRelations = relations(MataPelajaran, ({many}) => ({
	Tugases: many(Tugas),
	Jadwals: many(Jadwal),
}));

export const PenempatanGuruRelations = relations(PenempatanGuru, ({one}) => ({
	Guru: one(Guru, {
		fields: [PenempatanGuru.guru_id],
		references: [Guru.id]
	}),
	Sekolah: one(Sekolah, {
		fields: [PenempatanGuru.sekolah_id],
		references: [Sekolah.id]
	}),
}));

export const GuruRelations = relations(Guru, ({many}) => ({
	PenempatanGurus: many(PenempatanGuru),
}));

export const SekolahRelations = relations(Sekolah, ({many}) => ({
	PenempatanGurus: many(PenempatanGuru),
	Kelas: many(Kelas),
}));

export const KelasRelations = relations(Kelas, ({one, many}) => ({
	Murids: many(Murid),
	Sekolah: one(Sekolah, {
		fields: [Kelas.sekolah_id],
		references: [Sekolah.id]
	}),
	Jadwals: many(Jadwal),
}));

export const NilaiUASRelations = relations(NilaiUAS, ({one}) => ({
	NamaLain: one(NamaLain, {
		fields: [NilaiUAS.nama_lain_id],
		references: [NamaLain.id]
	}),
}));

export const NamaLainRelations = relations(NamaLain, ({one, many}) => ({
	NilaiUAS: many(NilaiUAS),
	Murid: one(Murid, {
		fields: [NamaLain.murid_id],
		references: [Murid.id]
	}),
}));

export const JadwalRelations = relations(Jadwal, ({one}) => ({
	Kela: one(Kelas, {
		fields: [Jadwal.kelas_id],
		references: [Kelas.id]
	}),
	MataPelajaran: one(MataPelajaran, {
		fields: [Jadwal.mapel_id],
		references: [MataPelajaran.id]
	}),
}));

export const KabupatenRelations = relations(Kabupaten, ({one, many}) => ({
	Provinsi: one(Provinsi, {
		fields: [Kabupaten.kode_provinsi],
		references: [Provinsi.kode_provinsi]
	}),
	Kecamatans: many(Kecamatan),
	DesaKelurahans: many(DesaKelurahan),
}));

export const ProvinsiRelations = relations(Provinsi, ({many}) => ({
	Kabupatens: many(Kabupaten),
	Kecamatans: many(Kecamatan),
	DesaKelurahans: many(DesaKelurahan),
}));

export const KecamatanRelations = relations(Kecamatan, ({one, many}) => ({
	Kabupaten: one(Kabupaten, {
		fields: [Kecamatan.kode_provinsi],
		references: [Kabupaten.kode_kabupaten]
	}),
	Provinsi: one(Provinsi, {
		fields: [Kecamatan.kode_provinsi],
		references: [Provinsi.kode_provinsi]
	}),
	DesaKelurahans: many(DesaKelurahan),
}));

export const DesaKelurahanRelations = relations(DesaKelurahan, ({one}) => ({
	Kabupaten: one(Kabupaten, {
		fields: [DesaKelurahan.kode_provinsi],
		references: [Kabupaten.kode_kabupaten]
	}),
	Kecamatan: one(Kecamatan, {
		fields: [DesaKelurahan.kode_provinsi],
		references: [Kecamatan.kode_provinsi]
	}),
	Provinsi: one(Provinsi, {
		fields: [DesaKelurahan.kode_provinsi],
		references: [Provinsi.kode_provinsi]
	}),
}));