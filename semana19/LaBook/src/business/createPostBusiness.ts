import { PostDatabase } from "../data/PostDatabase";
import { authenticationData } from "../model/authenticationModel";
import { convertType, POST_TYPES } from "../model/postModel";
import { generateId } from "../services/idGenerator"
import { getTokenData } from "../services/tokenGenerator"

export async function createPostBusiness(
   token: string,
   photo: string,
   description: string,
   type: string): Promise<void> {

   try {

      const tokenData: authenticationData = getTokenData(token)

      if (!tokenData.id) {
         throw new Error("Verificação de id");
      }

      if (!photo || !description) {
         console.log("Erro no envio")
      }

      if (type.toLowerCase() !== POST_TYPES.NORMAL &&
         type.toLowerCase() !== POST_TYPES.EVENT) {
         console.log("Type invalido")
      }

      const postType: POST_TYPES = convertType(type)
      const id: string = generateId()
      const date: Date = new Date()

      const database = new PostDatabase()

      await database.postCreator({
         id,
         photo,
         description,
         type: postType,
         createdAt: date,
         authorId: tokenData.id
      })

   } catch (error) {

      console.log("Estou dentro de createPostBusiness")

   }

}


