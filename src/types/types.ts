export interface IUser {
    id: number;
    fullName: string,
    email: string;
    password: string;
    passwordConfirmation?:string;
    photo?: string;
};

export interface IGroup {
    id: number,
    image: string,
    groupName: string;
    groupDescription: string;
    chocolateValue: string;
    groupMembersNum: string;
};

export interface ILogin {
    email: string;
    password: string;
}