import { ImageSourcePropType } from 'react-native';

export interface IUser {
    id: number;
    fullName: string,
    email: string;
    password: string;
    passwordConfirmation?:string;
    photo?: string;
};

export interface IGroup {
    id: string,
    image?: string,
    groupName: string,
};

export interface ILogin {
    email: string;
    password: string;
}