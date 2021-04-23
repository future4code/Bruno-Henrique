export interface User {
    name: string,
    balance: number
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}

export interface Client {
    name: string,
    age: number,
    nacionality: NACIONALITY
}

export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}

export interface Casino {
    name: string;
    location: LOCATION;
}


export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}

export interface ResultItem {
    allowed: string[];
    unallowed: string[];
}
