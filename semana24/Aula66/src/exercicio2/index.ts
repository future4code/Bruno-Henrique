import { Stack } from "./Stack";

const test = new Stack()
// console.log(test.isEmpty())

test.push("Primeiro valor")
test.push("Segundo valor")
test.push("Terceiro valor")
test.push("Quarto valor")
test.push("Quinto valor")
console.log(test.pop())
