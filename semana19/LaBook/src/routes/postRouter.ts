import express from 'express'

export const postRouter = express()

postRouter.post("/create")
postRouter.get("/:id")