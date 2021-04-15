import { postCreator } from "../data/postCreator";
import { convertType, post, POST_TYPES } from "../model/postModel";
import { generateId } from "../services/idGenerator"
import { getTokenData } from "../services/tokenGenerator"

export async function createPostBusiness(
   token: string,
   photo: string,
   description: string,
   type: string): Promise<any> {

   try {

      const tokenData: authenticationData = getTokenData(token)

      if (!tokenData.id) {
         throw new Error("Verificação de id");
      }

      if (!photo || !description) {
         console.log("Error no envio")
      }

      if (type.toLowerCase() !== POST_TYPES.NORMAL &&
         type.toLowerCase() !== POST_TYPES.EVENT) {
         console.log("Type invalido")
      }

      const postType: POST_TYPES = convertType(type)
      const id: string = generateId()
      const date: Date = new Date()

      await postCreator({
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


