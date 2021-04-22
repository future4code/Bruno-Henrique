export type jwtAuthentication = {
    id: string
}

export type account = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type userLogin = {
    email: string,
    password: string
}

export type recipe = {
    id?: number,
    title: string,
    description: Text,
    createdAt?: Date,
    userId: string
}