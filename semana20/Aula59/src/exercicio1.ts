import { Player } from "./model/playerModel";

export function validateCharacter(input: Player): boolean {

    if (!input.name || !input.atkPower || !input.defPower || !input.hp) {
        return false
    }

    if (input.hp <= 0 || input.atkPower <= 0 || input.defPower <= 0) {
        return false
    }

    return true

}