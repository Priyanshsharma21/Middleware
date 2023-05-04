import moment from 'moment'

export const printOS = async(req,res,next)=>{
    try {
        const date = new Date()
        const time = moment(date).format('YYYY-MM-DD HH:mm:ss')
        const ip = req.ip
        const route = req.route.path

        const information = {
            time : time,
            IP_Address : ip,
            route : route
        }

        req.jandarInformation = information
        
        next()
    } catch (error) {
        console.log(error)
    }
}