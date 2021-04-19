import { red, blue, green, yellow } from "chalk"
import { isEven } from "../src";

function test(name: string, receiveValue: any, expectedValue: any): void {
    console.log(
        "\n",
        name,
        expectedValue === receiveValue ? green("Pass") : red("Fail")
    )
}

console.log("\n", "Running tests...");

test("Test1 - Return true for number 10", isEven(10), true)
test("Test2 - Return false for number 11", isEven(11), false)

console.log("\n", "...Done")
