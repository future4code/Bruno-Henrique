export const missingNumber = (array: number[]): number[] | string => {

    const normalized: number[] = array.sort((a, b) => {
        return a - b
    })

    let findNumber: number[] = []

    normalized.map((item: number, index: number, arrNormalized: number[]) => {

        const diff: number = arrNormalized[index + 1] - arrNormalized[index]

        if (diff >= 2) {
            for (let i = 1; i < diff; i++) {
                findNumber.push(item + i)
            }
        }
    })

    return findNumber[0] ? findNumber : "Nenhum numero esta faltando na sequencia informada"
}
