import { User, UserRole } from "../../../src/model/User"

export const normalUserMock = new User(
    "normalId",
    "Normal",
    "normal@dev.com",
    "qwerty",
    UserRole.NORMAL
)

export const adminUserMock = new User(
    "adminId",
    "Admin",
    "admin@dev.com",
    "qwerty",
    UserRole.ADMIN
)