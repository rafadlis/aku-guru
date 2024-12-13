import { relations } from "drizzle-orm/relations";
import { namaLain, nilaiUas, murid } from "./schema";

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

export const muridRelations = relations(murid, ({many}) => ({
	namaLains: many(namaLain),
}));