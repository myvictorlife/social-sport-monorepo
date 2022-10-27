import { Address } from "../address/address.model";

export interface Court {
    id: 7,
    nome: string;
    foto: string;
    centroEsportivo: number;
    status: string;
    tipo: string;
}

export interface CourtsForRent {
    provideCourtId: number;
    sportCenterName: string;
    courtName: string;
    value: 80,
    address: Address,
    timeStart: string;
    timeEnd: string;
    dayOfWeek: string;
    courtType: string;
    imageCourt: string;
    status: string;
}