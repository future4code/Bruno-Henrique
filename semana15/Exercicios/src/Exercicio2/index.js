const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (process.argv[2]) {
    case "add":
        console.log(`${num1} + ${num2} = ${num1 + num2}`)
        break;
    case "sub":
        console.log(`${num1} - ${num2} = ${num1 - num2} `)
        break;
    case "mult":
        console.log(`${num1} x ${num2} = ${num1 * num2}`)
        break;
    case "div":
        console.log(`${num1} / ${num2} = ${num1 / num2}`)
        break;

    default:
        console.log("Operação não identificada!")
        break;
}