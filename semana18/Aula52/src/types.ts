export type jwtAuthentication = {
    id: string
}

export type userLogin = {
    email: string,
    password: string
}

export enum USER_ROLE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type userSignup = {
    email: string,
    password: string;
    role: USER_ROLE
}

export type userAddress = {
    street: string,
    neighborhood: string,
    city: string,
    state: string
}