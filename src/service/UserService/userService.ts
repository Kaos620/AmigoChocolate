import axios, {AxiosResponse} from "axios";
import { ILogin, IUser, IGroup } from "../../types/types";

const BASE_URL_USER = 'http://localhost:3000/User/';
const BASE_URL_GROUP = 'http://localhost:3000/Grupo/';

 export class UserService {
    constructor() {
        //Se necessário, adcionar inicializações aqui
    }

    async addUser ( user: IUser): Promise<boolean> {
        try{
            //const response = await axios.post(`${BASE_URL}`, user);
            const formData = new FormData();
            formData.append('fullName', user.fullName);
            formData.append('email', user.email);
            formData.append('password', user.password);
        
            const responsePhoto = await fetch(user.photo);
        
            const blob = await responsePhoto.blob();
        
            formData.append('photo', blob, 'photo.jpg');
        
            const uploadResponse = await axios.post(BASE_URL_USER+'addUser', formData, {
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
            const response = await axios.get(`${BASE_URL_USER}?&email=${email}&password=${password}`);
                console.log(response.data)
                if (response.data.length !== 0) {
                    return true;
                }
                return false;

        } catch (error) {
            console.error('Erro ao validar usuario', error);
            return false;
        }
    }

    async getGroup(image: string, groupName: string ): Promise<IGroup[] | null> {
        try {
            const response: AxiosResponse<IGroup[]> = await axios.get(`${BASE_URL_GROUP}?&image=${image}&password=${groupName}`);
            if (response.status >= 200 && response.status < 300) {
                return response.data;
            } else {
                console.error("Erro ao buscar grupo. Status:", response.status);
                return null;
            }
        } catch (error) {
            console.error("Erro ao buscar grupo:", error);
            return null; 
        }
    }
}