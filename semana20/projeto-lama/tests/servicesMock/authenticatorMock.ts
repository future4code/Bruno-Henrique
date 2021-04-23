export class Authenticator {

  public generateToken = (input: AuthenticationData,
    expiresIn: string = process.env.ACCESS_TOKEN_EXPIRES_IN!): string => {

    return "token"

  }

  public getData = (token: string): AuthenticationData => {

    if (!token) {
      throw new Error("Check authenticatorMock");
    }

    return {
      id: "id",
      role: token === "ADMIN" ? "ADMIN" : "NORMAL"
    }
  }
}

interface AuthenticationData {
  id: string;
  role?: string;
}

export default new Authenticator()