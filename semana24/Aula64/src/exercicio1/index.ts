interface hashTable {
    [key: string]: any
}

const checkOneEditString = (text1: string, text2: string): Boolean => {

    const handleString = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[^a-zA-z]/g, "")
    }

    const indexCharacters = (text: string): hashTable => {
        const result: hashTable = {}

        for (let character of text) {
            if (result[character])
                result[character]++
            else
                result[character] = 1
        }

        return result
    }

    text1 = handleString(text1)
    text2 = handleString(text2)

    if (Math.abs(text1.length - text2.length) > 1) {
        return false
    }

    console.log(indexCharacters(text1));
    console.log(indexCharacters(text2));    

    return true
}

console.log(checkOneEditString("banana", "anbana"))