export const missingNumber = (array: number[]): number[] | string => {

    const normalized: number[] = array.sort((a, b) => {
        return a - b
    })

    let findNumber: number[] = []

    normalized.map((item: number, index: number, arrNormalized: number[]) => {
        if (arrNormalized[index + 1] - arrNormalized[index] > 1) {
            findNumber.push(item + 1)
        }
    })

    return findNumber[0] ? findNumber : "Nenhum numero esta faltando na sequencia informada"
}
