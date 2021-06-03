export const funcSoma = (array: number[], target: number): number[] => {
    let inicial: number[] = []
    let arrIndex = array.reduce((acc, value, idx, arr) => {
        let index: number = idx + 1
        for (index; index < array.length; index++) {
            if (value + arr[index] === target) {
                acc.push(idx)
                acc.push(index)
            }
        }
        return acc
    }, inicial)

    return arrIndex
}
