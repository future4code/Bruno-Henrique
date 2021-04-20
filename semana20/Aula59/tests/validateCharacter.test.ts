import { validateCharacter } from "../src/exercicio1"

describe("Testing validateCharacter", () => {

    test("Should return true for a valid player", () => {

        const input = {
            name: "Astrodev",
            hp: 1500,
            atkPower: 2000,
            defPower: 1500
        }

        const output = validateCharacter(input)
        expect(output).toBe(true)
    })

    test("Should return false for a empty name", () => {
        const input = {
            name: "",
            hp: 1500,
            atkPower: 2000,
            defPower: 1500
        }

        const output = validateCharacter(input)
        expect(output).toBe(false)

    })

    test("Should return false for hp equal 0 ", () => {
        const input = {
            name: "Astrodev",
            hp: 0,
            atkPower: 2000,
            defPower: 1500
        }

        const output = validateCharacter(input)
        expect(output).toBe(false)

    })

    test("Should return false for atkPower equal 0 ", () => {
        const input = {
            name: "Astrodev",
            hp: 1500,
            atkPower: 0,
            defPower: 1500
        }

        const output = validateCharacter(input)
        expect(output).toBe(false)

    })

    test("Should return false for defPower equal 0 ", () => {
        const input = {
            name: "Astrodev",
            hp: 1500,
            atkPower: 2000,
            defPower: 0
        }

        const output = validateCharacter(input)
        expect(output).toBe(false)

    })

    test("Should return false for defPower less than 0 ", () => {
        const input = {
            name: "Astrodev",
            hp: 1500,
            atkPower: 2000,
            defPower: -120
        }

        const output = validateCharacter(input)
        expect(output).toBe(false)

    })

})