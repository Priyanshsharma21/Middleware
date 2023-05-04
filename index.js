import app from './app.js'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()



const { MONGO_URL, PORT } = process.env


const startServer = async()=>{
    try {
        await mongoose.connect(MONGO_URL)
        console.log('Connected To Database')
        app.listen(PORT,()=>{
            console.log(`Running Up The Hill At ${PORT}km/hr`)
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()