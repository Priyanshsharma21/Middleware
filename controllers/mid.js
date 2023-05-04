export const infoMain = async(req,res)=>{
    try {
        res.status(200).json({success:true, information : req.jandarInformation})
    } catch (error) {
        console.log(error)
        req.json({success: false, error : error})
    }
}