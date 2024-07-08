import { connect } from "../../../../../dbConfig/db";
import Appointment from "../../../../../model/Appointment";

export async function GET(req: Request) {
  await connect();

  try {
    const appointments = await Appointment.find();
    return new Response(JSON.stringify(appointments), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req: Request) {
  await connect();

  try {
    const body = await req.json();
    const { name, email, dateOfBirth, gender, department, time } = body;
    const appointment = new Appointment({
      name,
      email,
      dateOfBirth,
      gender,
      department,
      time,
    });
    await appointment.save();
    return new Response(JSON.stringify(appointment), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
