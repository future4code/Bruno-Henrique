import express from 'express'
import { createPost } from '../controller/createPost'
import { getPostById } from '../controller/getPostById'

export const postRouter = express()

postRouter.post("/create", createPost)
postRouter.get("/:id", getPostById)