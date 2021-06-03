export const checkParenteses = (text: string): Boolean => {

    if (!text) return true

    if(text.length % 2 !== 0) {
        console.log("Dentro do if par/impar");
        return false        
    }

    const regx = new RegExp('[0-9A-Z]', 'i')

    if (regx.test(text)) {
        console.log("Somente parenteses, colchetes e chaves são permitidos");
        return false
    }

    return false
}

/* 
    * Gabarito  
*/

export function checaParenteses(str: string): Boolean {

    if (str.length % 2 !== 0) { 
        return false
    }
    const stack = [];

    for (let char of str) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {
            const lastOpeningChar = stack.pop();
            if (!lastOpeningChar) {
                return false
            } else if (
                (lastOpeningChar === "(" && char !== ")") ||
                (lastOpeningChar === "[" && char !== "]") ||
                (lastOpeningChar === "{" && char !== "}")
            ) {
                return false;
            }
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;
}