var colors = require('colors')

colors.setTheme({
    error: 'red',
    errorBg: 'bgWhite',
    sucess: 'black',
    sucessBg: 'bgGreen'
})

if (process.argv[2] && process.argv[3] && process.argv[4]) {
    const num1 = Number(process.argv[3])
    const num2 = Number(process.argv[4])

    switch (process.argv[2]) {
        case "add":
            console.log((`${num1} + ${num2} = ${num1 + num2}`).sucess.sucessBg)
            break;
        case "sub":
            console.log((`${num1} - ${num2} = ${num1 - num2}`).sucess.sucessBg)
            break;
        case "mult":
            console.log((`${num1} x ${num2} = ${num1 * num2}`).sucess.sucessBg)
            break;
        case "div":
            console.log((`${num1} / ${num2} = ${num1 / num2}`).sucess.sucessBg)
            break;

        default:
            console.log((`${process.argv[2]}`).error.errorBg + " " + (`não uma operação válida!`))
            break;
    }
} else {
    console.log("Espero receber 3 parametros de entrada.".error.errorBg)
}