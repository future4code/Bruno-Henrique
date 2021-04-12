export enum ROLE_TYPE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type userSignup = {
    name: string,
    email: string,
    password: string,
    role: string
}

export function convertRole(role: string): ROLE_TYPE {
    switch (role) {
        case "ADMIN":
            return ROLE_TYPE.ADMIN;

        case "NORMAL":
            return ROLE_TYPE.NORMAL;

        default:
            return ROLE_TYPE.NORMAL;
    }
}