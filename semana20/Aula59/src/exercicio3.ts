import { validateCharacter } from "./exercicio1";
import { Player } from "./model/playerModel";

export function performAttack(attacker: Player, defender: Player) {

    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid Characters");
    }

    if (attacker.atkPower > defender.defPower) {
        defender.hp -= attacker.atkPower - defender.defPower    
    }

}