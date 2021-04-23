export class Authenticator {

  public generateToken(input: AuthenticationData): string {
    return "token";
  }

  public getData(token: string): AuthenticationData {

    if (!token) throw new Error("Check AuthenticatorMock");

    return {
      id: "id",
      role: token === "ADMIN" ? "ADMIN" : "NORMAL"
    };
  }
}

interface AuthenticationData {
  id: string;
  role?: string;
}

export default new Authenticator()