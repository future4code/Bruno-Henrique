export type user = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type userSignup = {
    name: string,
    email: string,
    password: string
}

export type userLogin = {
    email: string,
    password: string
}