export interface Calculation {
    uuid: string;
    progress: number;
    data: string;
}

export interface Data {
    uuid: string;
    type?: number;
    name?: string;
    content?: string;
    [key: string]: any;
}

export interface User {
    id: number;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
}