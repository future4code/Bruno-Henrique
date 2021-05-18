import { indexCharacters } from "../functions/HandleHashTable"
import { handleString } from "../functions/HandleString"

const checkOneEditString = (text1: string, text2: string): Boolean => {

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
console.log(checkOneEditString("banana sub-aquaticas", "bananas sub-aquaticas"))    //true

console.log(checkOneEditString("banana", "abacaxi"))    //false
console.log(checkOneEditString("girafas sub-aquaticas", "bananas sub-aquaticas"))    //false

