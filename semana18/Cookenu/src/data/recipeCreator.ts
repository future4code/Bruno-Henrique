import connection from "../connection";

async function recipeCreator(title: string, description: Text, userId: string) {

    await connection("cookenu_recipes")
        .insert({
            title,
            description,
            user_id: userId
        })
}

export default recipeCreator