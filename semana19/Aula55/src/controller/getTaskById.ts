import { Request, Response } from "express";
import { selectTaskById } from "../data/selectTaskById";
import { userTaskDTO } from "../model/task";
import { userDTO } from "../model/user";

export const getTaskById = async (
   req: Request,
   res: Response
) => {
   try {

      const { id } = req.params

      const result: userTaskDTO = await selectTaskById(id)

      if (!result) {
         throw new Error("Tarefa não encontrada")
      }

      const taskWithUserInfo = {
         id: result.id,
         title: result.title,
         description: result.description,
         deadline: result.deadline,
         status: result.status,
         authorId: result.authorId,
         authorNickname: result.authorNickname
      }

      res.status(200).send(taskWithUserInfo)

   } catch (error) {
      res.status(400).send(error.message)
   }
}