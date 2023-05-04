import express from 'express'
import { infoMain } from '../controllers/mid.js'
import { printOS } from '../middlewares/index.js'


const router = express.Router()


router.get('/createUser',printOS, infoMain)


export default router