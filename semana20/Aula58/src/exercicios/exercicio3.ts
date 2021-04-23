import { Casino, Client, NACIONALITY, Result, ResultItem } from "../model/userModel";

export function verifyAge(casino: Casino, clients: Client[]) {

    const locationBrazil = (): Result => {

        let allowedList: Client[] = []
        let unallowedList: Client[] = []

        clients.map((client) => {
            if (client.age < 18) {
                unallowedList.push(client)
            } else {
                allowedList.push(client)
            }
        })

        const brazilians = {

            allowed: allowedList.filter((client) => {
                client.nacionality.toUpperCase() === NACIONALITY.BRAZILIAN
            }).map((client) => {
                client.name
            }),

            unallowed: allowedList.filter((client) => {
                client.nacionality.toUpperCase() === NACIONALITY.BRAZILIAN
            }).map((client) => {
                client.name
            })
        }

        const americans = {

            allowed: allowedList.filter((client) => {
                client.nacionality.toUpperCase() === NACIONALITY.AMERICAN
            }).map((client) => {
                client.name
            }),

            unallowed: allowedList.filter((client) => {
                client.nacionality.toUpperCase() === NACIONALITY.AMERICAN
            }).map((client) => {
                client.name
            })
        }

        return { brazilians, americans }

    }


    switch (casino.location.toUpperCase()) {
        case "BRAZIL":
            locationBrazil()
            break;

        case "EUA":

            break;

        default:
            return undefined;
    }

}