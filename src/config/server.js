import { errorMiddleware } from '../../../belajar-nodejs-restful-api/src/middleware/error-middleware.js'
import express from 'express'
import { publicRouter } from '../routes/public-api.js'

export const server = express()
server.use(express.json())
server.use(publicRouter)
server.use(errorMiddleware)