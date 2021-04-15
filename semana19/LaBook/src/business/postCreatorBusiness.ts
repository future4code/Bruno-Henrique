import { generateId } from "../services/idGenerator"
import { getTokenData } from "../services/tokenGenerator"

export async function postCreatorBusiness(token: string): Promise<any> {

   try {

      const tokenData: authenticationData = getTokenData(token)

      const id: string = generateId()

      await connection("labook_posts")
         .insert({
            id,
            photo,
            description,
            type,
            author_id: tokenData.id
         })

   } catch (error) {

   }

}


