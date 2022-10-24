import { Address } from "../address/address.model";

export interface User {
    nomeCompleto: string;
    cpf: string;
    dataNascimento: string;
    celular: string;
    email: string;
    foto: string;
    endereco: Address
}