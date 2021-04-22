import { User, USER_ROLES } from "../../src/model/User";

export const normalUserMock = new User(
    "id",
    "Normal",
    "normal@dev.com",
    "qwerty",
    USER_ROLES.NORMAL
)

export const adminUserMock = new User(
    "id",
    "Admin",
    "admin@dev.com",
    "qwerty",
    USER_ROLES.ADMIN
)