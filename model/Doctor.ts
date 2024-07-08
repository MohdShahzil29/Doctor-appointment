import mongoose, { Document, Schema } from "mongoose";

interface IDoctor extends Document {
  name: string;
  department: string;
  gender: string;
  email: string;
  dob: Date;
  photoUrl: string;
}

const DoctorSchema: Schema = new Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  photoUrl: { type: String, required: true },
});

export default mongoose.models.Doctor ||
  mongoose.model<IDoctor>("Doctor", DoctorSchema);
