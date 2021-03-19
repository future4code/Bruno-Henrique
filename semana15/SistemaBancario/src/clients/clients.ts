export type details = {
    value: number,
    date: Date,
    info: string
}

export type client = {
    name: string,
    cpf: number,
    birthday: Date,
    currentMoney: number,
    accInfo: details[]
}

export let clients: client[] = [
    {
        name: "Bruno",
        cpf: 1,
        birthday: new Date("1983-02-05"),
        currentMoney: 200,
        accInfo: [
            {
                value: 10,
                date: new Date("2019-12-05"),
                info: "Padaria"
            },
            {
                value: 30,
                date: new Date("2019-08-05"),
                info: "Mercado"
            }
        ]
    },
    {
        name: "Rafael",
        cpf: 2,
        birthday: new Date("2000-08-05"),
        currentMoney: 1020,
        accInfo: [
            {
                value: 50,
                date: new Date("2020-08-05"),
                info: "Presente"
            },
            {
                value: 360,
                date: new Date("2020-08-05"),
                info: "Restaurante"
            }
        ]
    }
]