import connection from "../connection";
import { recipe } from "../types";

export async function selectRecipe(id: number): Promise<recipe | null> {
    try {
        const [recipe] = await connection("cookenu_recipes")
            .where({ id })

        if (!recipe) {
            throw new Error(`Recipe with id:${id}, not found!`);
        }

        return recipe

    } catch (error) {
        console.log(error.message)
        return null
    }
}