import express from 'express'
import { createPost } from '../controller/createPost'

export const postRouter = express()

postRouter.post("/create", createPost)
postRouter.get("/:id")