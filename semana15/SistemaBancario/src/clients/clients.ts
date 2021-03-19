type details = {
    value: number,
    date: number,
    info: string
}

type client = {
    name: string,
    cpf: number,
    born: number,
    currentMoney: number,
    accInfo: details[]
}

let clients: client[] = [
    {
        name: "Bruno",
        cpf: 1,
        born: 23051983,
        currentMoney: 0,
        accInfo: []
    },
    {
        name: "Rafael",
        cpf: 2,
        born: 23052000,
        currentMoney: 0,
        accInfo: []
    },
]