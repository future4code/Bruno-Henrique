export const funcSoma = (array: number[], target: number): number[] => {
    let arrIndex = array.reduce((acc, value, idx, arr) => {
        for (let index = idx + 1; index < array.length; index++) {
            if (value + arr[index] === target) {
                acc.push(idx)
                acc.push(index)
            }
        }
        return acc
    }, [])

    return arrIndex
}
