import {
    TokenInfo,
} from 'google-auth-library';



export interface Item {
    id: string;
    name: string;
    file: string;
    boundingBox?: number[];
}


export type TokensUser = TokenInfo;


export interface DatabaseUser {
    id: string;
    createdAt: string;
    email: string;
    name: string;
    picture: string;
    payments: string;
    shops: number;
}
