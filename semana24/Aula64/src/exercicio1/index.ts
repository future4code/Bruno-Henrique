interface hashTable {
    [key: string]: any
}

const checkOneEditString = (text1: string, text2: string): Boolean => {

    const handleString = (text: string) => {
        return text
            .normalize('NFD')
            .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
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

    let count1 = 0
    let count2 = 0
    const handleText1 = indexCharacters(text1)
    const handleText2 = indexCharacters(text2)

    for (let key in handleText1) {

        if (handleText1[key] !== handleText2[key]) {
            count1++
        }
    }

    for (let key in handleText2) {

        if (handleText2[key] !== handleText1[key]) {
            count2++
        }
    }

    return count1 === count2
}

console.log(checkOneEditString("banana", "anbana"))     //true
console.log(checkOneEditString("banana", "anbanaa"))    //true
console.log(checkOneEditString("banana", "panana"))     //true

console.log(checkOneEditString("banana", "abacaxi"))    //false
console.log(checkOneEditString("banana", "girafas sub-aquaticas"))    //false

