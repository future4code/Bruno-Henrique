import { User, USER_ROLES } from "../../src/model/User";

export const normalUserMock = new User(
    "normalId",
    "Normal",
    "normal@dev.com",
    "qwerty",
    USER_ROLES.NORMAL
)

export const adminUserMock = new User(
    "adminId",
    "Admin",
    "admin@dev.com",
    "qwerty",
    USER_ROLES.ADMIN
)
