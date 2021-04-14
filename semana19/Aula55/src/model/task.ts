import { type } from "node:os"

export type task = {
   id: string,
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type createTaskInput = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type userTaskDTO = {
   id: string,
   title: string,
   description: string,
   deadline: string,
   status: string,
   authorId: string,
   authorNickname: string
}