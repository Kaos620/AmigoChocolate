import axios, {AxiosResponse} from "axios";
import { User } from "../../types/types";

const BASE_URL = 'https://localhost8081/User/';

 export class UserService {
    constructor() {
        //Se necessário, adcionar inicializações aqui
    }

    async addUser ( user: User): Promise<boolean> {
        try{
            const response = await axios.post(`${BASE_URL}`, user);
            return response.status === 201; // Retorna true se o usuario for adicionado com sucesso
        } catch (error) {
            console.error('Erro ao tentar adicionar um usuario', error);
            return false;
        }
    }

    async validateUser (fullName:string, email: string, password: string): Promise<boolean> {
        try{
            const response: AxiosResponse<User[]> = await axios.get(`${BASE_URL}?fullname= ${fullName} &email = ${email}&password = ${password}`);
                if (response.data.length === 0) {
                    return false;
                }
                return response.status === 200;

        } catch (error) {
            console.error('Erro ao validar usuario', error);
            return false;
        }
    }
}