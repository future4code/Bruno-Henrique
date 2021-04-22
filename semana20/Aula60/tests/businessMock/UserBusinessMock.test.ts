import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabase } from "../../src/data/UserDatabase"
import { User, USER_ROLES } from "../../src/model/User"
import userDatabaseMock from "../dataMock/userDatabaseMock"
import hashGeneratorMock from "../servicesMock/hashGeneratorMock"
import idGeneratooMock from "../servicesMock/idGeneratooMock"
import tokenGeneratorMock from "../servicesMock/tokenGeneratorMock"

const userBusiness = new UserBusiness(
    idGeneratooMock,
    tokenGeneratorMock,
    hashGeneratorMock,
    userDatabaseMock as UserDatabase
)

describe("Signup", () => {

    test("should return 'Missing input' when 'name' is blank", async () => {
        expect.assertions(2)
        try {
            await userBusiness.signup(
                "",
                "bruno@dev.com",
                "1234567",
                USER_ROLES.NORMAL
            )
        } catch (error) {
            expect(error.statusCode).toBe(422)
            expect(error.message).toBe('Missing input')
        }
    })

    test("should return 'Invalid email' when 'email' is invalid", async () => {
        expect.assertions(2)
        try {
            await userBusiness.signup(
                "Bruno",
                "brunodev.com",
                "1234567",
                USER_ROLES.NORMAL
            )
        } catch (error) {
            expect(error.statusCode).toBe(422)
            expect(error.message).toBe('Invalid email')
        }
    })

    test("should return 'Invalid password' when 'password' is invalid", async () => {
        expect.assertions(2)
        try {
            await userBusiness.signup(
                "Bruno",
                "bruno@dev.com",
                "123",
                USER_ROLES.NORMAL
            )
        } catch (error) {
            expect(error.statusCode).toBe(422)
            expect(error.message).toBe('Invalid password')
        }
    })

    test("should return 'Invalid user role' when 'role' is invalid", async () => {
        expect.assertions(2)
        try {
            await userBusiness.signup(
                "Bruno",
                "bruno@dev.com",
                "1234567",
                "teste"
            )
        } catch (error) {
            expect(error.statusCode).toBe(422)
            expect(error.message).toBe('Invalid user role')
        }
    })

    test("should return 'success' when all fields are correct", async () => {
        expect.assertions(1)
        try {
            const { accessToken } = await userBusiness.signup(
                "Bruno",
                "bruno@dev.com",
                "1234567",
                "NORMAL"
            )

            expect(accessToken).toBe("token")

        } catch (error) {

        }
    })

})


describe("Login", () => {

    test("should return 'Invalid credentials' when email is not found", async () => {

        expect.assertions(2)

        try {
            await userBusiness.login(
                "bruno@dev.com",
                "qwerty"
            )

        } catch (error) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe('Invalid credentials')
        }
    })

    test("should return 'Invalid credentials' when password is not correct", async () => {
        expect.assertions(2)

        try {
            await userBusiness.login(
                "normal@dev.com",
                "1234567"
            )

        } catch (error) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe('Invalid credentials')
        }
    })

    test("should return 'success' when all fields are correct", async () => {
        expect.assertions(1)

        try {
            const { accessToken } = await userBusiness.login(
                "normal@dev.com",
                "qwerty"
            )

            expect(accessToken).toBe("token")

        } catch (error) {

        }
    })

})