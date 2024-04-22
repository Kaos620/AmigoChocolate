import axios, {AxiosResponse} from "axios";
import { User } from "../../types/types";

const BASE_URL = 'https://localhost:3000/User';

 export class UserService {
    constructor() {
        //Se necessário, adcionar inicializações aqui
    }

    async addUser ( user: User): Promise<boolean> {
        try{
            //const response = await axios.post(`${BASE_URL}`, user);
            const formData = new FormData();
            formData.append('fullName', user.fullName);
            formData.append('email', user.email);
            formData.append('password', user.password);
        
            const responsePhoto = await fetch(user.photo);
        
            const blob = await responsePhoto.blob();
        
            formData.append('photo', blob, 'photo.jpg');
        
            const uploadResponse = await axios.post(BASE_URL+'addUser', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
              return uploadResponse.status === 201; // Retorna true se o usuário foi adicionado com sucesso
        } catch (error) {
            console.error('Erro ao tentar adicionar um usuario', error);
            return false;
        }
    }

    async validateUser (email: string, password: string): Promise<boolean> {
        try{
            const response: AxiosResponse<User[]> = await axios.get(`${BASE_URL}?&email = ${email}&password = ${password}`);
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