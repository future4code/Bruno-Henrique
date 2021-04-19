import { User } from "../model/userModel";

export function performPuschase(user: User, value: number): User | undefined {

    if (user.balance < value) {
        return undefined
    }

    const newUser: User = {
        name: user.name,
        balance: user.balance - value
    }

    return newUser
}