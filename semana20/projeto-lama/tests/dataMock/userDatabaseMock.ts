import { User } from "../../src/model/User";
import { adminUserMock, normalUserMock } from "../modelMock/UserMock";

export class UserDatabaseMock {

    public async createUser(
        id: string,
        email: string,
        name: string,
        password: string,
        role: string
    ): Promise<void> {}

    public async getUserByEmail(email: string): Promise<User | undefined> {
        if(email === normalUserMock.getEmail()){
            return normalUserMock
        }

        if(email === adminUserMock.getEmail()){
            return adminUserMock
        }
    }
}

export default new UserDatabaseMock()