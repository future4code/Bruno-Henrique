export enum POST_TYPES {
   NORMAL = "normal",
   EVENT = "event"
}

export type post = {
   id: string,
   photo: string,
   description: string,
   type: POST_TYPES,
   createdAt: Date,
   authorId: string
}

export type userPost = {
   photo: string,
   description: string,
   type: string,
}

export const convertType = (type: string) => {
   switch (type.toLowerCase()) {
      case "normal":
         return POST_TYPES.NORMAL;

      case "event":
         return POST_TYPES.EVENT;

      default:
         return POST_TYPES.NORMAL;
   }
}