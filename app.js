import express from 'express'
import mainRoute from './routes/mid.js'

const app = express()


// Global Middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))




// Router middlewares
app.use('/api/v1', mainRoute)



export default app