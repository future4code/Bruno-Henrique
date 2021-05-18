export const indexCharacters = (text: string): hashTable => {
    const result: hashTable = {}

    for (let character of text) {
        if (result[character])
            result[character]++
        else
            result[character] = 1
    }

    return result
}

export interface hashTable {
    [key: string]: any
}