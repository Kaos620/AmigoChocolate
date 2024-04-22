import { ImageSourcePropType } from 'react-native';

export interface User {
    id: number;
    fullName: string,
    email: string;
    password: string;
    photo?: string;
};

export interface Group {
    id: string,
    image?: string,
    groupName: string,
};