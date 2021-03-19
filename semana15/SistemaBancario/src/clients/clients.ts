export type details = {
    value: number,
    date: number,
    info: string
}

export type client = {
    name: string,
    cpf: number,
    born: number,
    currentMoney: number,
    accInfo: details[]
}

export let clients: client[] = [
    {
        name: "Bruno",
        cpf: 1,
        born: 23051983,
        currentMoney: 200,
        accInfo: [
            {
                value: 10,
                date: 20210101,
                info: "Padaria"
            },
            {
                value: 30,
                date: 20210101,
                info: "Mercado"
            }
        ]
    },
    {
        name: "Rafael",
        cpf: 2,
        born: 23052000,
        currentMoney: 1020,
        accInfo: [
            {
                value: 50,
                date: 20210101,
                info: "Presente"
            },
            {
                value: 360,
                date: 20210101,
                info: "Restaurante"
            }
        ]
    }
]