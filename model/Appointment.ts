import { Schema, model, models, Document } from "mongoose";

interface IAppointment extends Document {
  name: string;
  email: string;
  dateOfBirth: Date;
  gender: string;
  department: string;
  time: string;
}

const appointmentSchema = new Schema<IAppointment>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  department: { type: String, required: true },
  time: { type: String, required: true },
});

const Appointment =
  models.Appointment || model<IAppointment>("Appointment", appointmentSchema);

export default Appointment;
