import Job from "../models/Job";
import dbconn from "../mongoConn";

export default async function handler(req,res){
    await dbconn()

    const {method} = req;

    switch (method) {
        case "GET":
            const job = await Job.findById(req.query.id);
            if(!job) {
                return res.status(400).json({message:"No data found"})
            }
            return res.status(200).json(job)
            
        case "DELETE" : 
            const delJob = await Job.findByIdAndDelete(req.query.id)
            if(!delJob) {
                return res.status(400).json({message: 'Job not found'})
            }
            return res.status(200).json({message: "Job deleted successfully"})
    
        default:
            break;
    }
}