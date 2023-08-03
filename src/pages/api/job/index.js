import Job from '../models/Job';
import dbconn from '../mongoConn';

export default async function handler(req, res) {
  await dbconn();
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const job = await Job.create({...req.body});
        if (!job) {
          return res.status(400).json({ message: 'Please provide all necessary data' });
        }
        return res.status(200).json(job);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }

    case 'GET': 
      try {
        const jobs = await Job.find();
          if (!jobs) {
            return res.status(400).json({ message: "No Jobs found" });
          }
          return res.status(200).json(jobs);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }

    default:
      return res.status(404).json({ message: 'Not found' });
  }
}
