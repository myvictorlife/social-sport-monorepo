import { Address } from "../address/address.model";

export interface LessorUser {

    nomeCentroEsportivo: string;
    cnpj: string;
    responsavel: Responsavel;
    endereco: Address
}

export interface Responsavel {
    nomeCompleto: string;
    cpf: string;
    dataNascimento: string;
    celular: string;
    email: string;
    foto: string;
    endereco: string;
}
