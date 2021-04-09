import connection from "../connection";
import { recipe } from "../types";

async function recipeCreator(title: string, description: Text, userId: string): Promise<void> {

    await connection("cookenu_recipes")
        .insert({
            title,
            description,
            user_id: userId
        })
}

export default recipeCreator