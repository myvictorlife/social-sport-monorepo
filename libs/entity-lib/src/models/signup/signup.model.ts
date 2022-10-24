import { User } from "../user/user.model"

export interface Signup {
    pessoa: User;
    userName: string;
}

export interface SignupResponse {
    id: User;
    mensagem: string;
}
