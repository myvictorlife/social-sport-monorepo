import { Address } from "../address/address.model";

export interface Court {
    courtsAmount: number;
    courtsForRent: CourtsForRent[];
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