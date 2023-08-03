import mongoose, {Schema} from "mongoose";

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  companyWebsite:{
    type:String
  },
  icon:{
    type:String,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String],
  },
  employmentType: {
    type: String,
    enum: ["fulltime", "parttime", "remote"],
    default: "fulltime",
  },
  requirementsInfo: {
    type:String
  },
  introToWork:{
    type:String
  },
  todo:{
    type:[String],
  }
});

const Job = mongoose.models.Job || mongoose.model("Job", JobSchema);

export default Job;
