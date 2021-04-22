
export class TokenGeneratorMock {

    public generate = (input: AuthenticationData): string => {
        return "token"
    };

    public verify(token: string) {
        if (!token) throw new Error("Check tokenGeneratorMock!");

        return {
            id: "id",
            role: token === "ADMIN" ? "ADMIN" : "NORMAL"
        }
    }
}

export interface AuthenticationData {
    id: string;
    role: string;
}

export default new TokenGeneratorMock()