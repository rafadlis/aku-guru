import { relations } from "drizzle-orm/relations";
import { Kabupaten, Sekolah, Provinsi, Murid, NilaiTugas, Tugas, MataPelajaran, Guru, PenempatanGuru, NamaLain, NilaiUAS, Kelas, Jadwal, Kecamatan, DesaKelurahan } from "./schema";

export const SekolahRelations = relations(Sekolah, ({one, many}) => ({
	Kabupaten: one(Kabupaten, {
		fields: [Sekolah.kode_provinsi],
		references: [Kabupaten.kode_kabupaten]
	}),
	Provinsi: one(Provinsi, {
		fields: [Sekolah.kode_provinsi],
		references: [Provinsi.kode_provinsi]
	}),
	PenempatanGurus: many(PenempatanGuru),
	Kelas: many(Kelas),
}));

export const KabupatenRelations = relations(Kabupaten, ({one, many}) => ({
	Sekolahs: many(Sekolah),
	Provinsi: one(Provinsi, {
		fields: [Kabupaten.kode_provinsi],
		references: [Provinsi.kode_provinsi]
	}),
	Kecamatans: many(Kecamatan),
	DesaKelurahans: many(DesaKelurahan),
}));

export const ProvinsiRelations = relations(Provinsi, ({many}) => ({
	Sekolahs: many(Sekolah),
	Kabupatens: many(Kabupaten),
	Kecamatans: many(Kecamatan),
	DesaKelurahans: many(DesaKelurahan),
}));

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
	NamaLains: many(NamaLain),
	Kela: one(Kelas, {
		fields: [Murid.kelas_id],
		references: [Kelas.id]
	}),
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

export const KelasRelations = relations(Kelas, ({one, many}) => ({
	Murids: many(Murid),
	Sekolah: one(Sekolah, {
		fields: [Kelas.sekolah_id],
		references: [Sekolah.id]
	}),
	Jadwals: many(Jadwal),
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